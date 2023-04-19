import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBarItem from "./SearchBarItem";
import { locationIcon, priceIcon, typeIcon } from "../../assets/search_icons";
import PriceDropdown from "./PriceDropdown";
import getCurrentFilter from "../../utils/getCurrentFilter";
import navigateToDestinationWithParams from "../../utils/navigateToDestinationWithParams";
import getPriceText from "../../utils/getPriceText";

const filters = [
  {
    id: "location",
    title: "Địa điểm",
    icon: locationIcon,
    placeholder: "Bạn muốn đi đâu?",
    dropdown: false,
    readOnly: false,
  },
  {
    id: "price",
    title: "Giá cả",
    icon: priceIcon,
    placeholder: "Chọn mức giá ",
    dropdown: true,
    readOnly: true,
  },
  {
    id: "type",
    title: "Loại hình",
    icon: typeIcon,
    placeholder: "Chọn loại hình",
    dropdown: true,
    readOnly: true,
  },
];

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchData, setSearchData] = useState({
    location: "",
    price: { text: "", min: null, max: null },
    type: "",
  });

  useEffect(() => {
    if (location.pathname !== "/destination") return;
    const filter = getCurrentFilter(location);
    const min = parseInt(filter.min);
    const max = parseInt(filter.max);
    setSearchData({
      ...searchData,
      location: filter.search ?? "",
      price: {
        text: getPriceText(min, max),
        min,
        max,
      },
    });
  }, [location]);

  const getItemProps = (i, item) => {
    return {
      item,
      index: i,
      value: item.id === "price" ? searchData.price.text : searchData[item.id],
      onChange: (e) => {
        if (item.id === "location") {
          setSearchData({ ...searchData, location: e.target.value });
        }
      },
    };
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = {
      min: searchData.price.min,
      max: searchData.price.max,
      search: searchData.location,
    };
    navigateToDestinationWithParams(params, navigate);
  };

  return (
    <div className="relative w-fit mx-auto">
      <div className="h-2 w-full bg-white absolute -top-2"></div>
      <form
        onSubmit={handleSearch}
        className="search-bar-container"
      >
        <div className="row gap-x-[46px]">
          {filters.map((item, i) =>
            item.id === "price" ? (
              <PriceDropdown
                key={i}
                searchData={searchData}
                setSearchData={setSearchData}
              >
                <SearchBarItem {...getItemProps(i, item)} />
              </PriceDropdown>
            ) : (
              <SearchBarItem key={i} {...getItemProps(i, item)} />
            )
          )}
        </div>
        <button
          type="submit"
          className="px-[52px] py-[18px] bg-blue rounded-5 text-medium text-white"
        >
          Tìm kiếm
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
