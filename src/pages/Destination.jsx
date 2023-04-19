import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination, Select } from "antd";
import ToursContainer from "../components/ToursContainer";
import tours from "../constants/tours";
import { downArrowIcon } from "../assets/arrow_icons";
import getCurrentFilter from "../utils/getCurrentFilter";
import navigateToDestinationWithParams from "../utils/navigateToDestinationWithParams";
import removeAccents from "../utils/removeAccents";
import hasAccent from "../utils/hasAccent";

const baseData = [
  ...tours,
  ...tours,
  ...tours,
  ...tours,
  ...tours,
  ...tours,
  ...tours,
  ...tours,
  ...tours,
  ...tours,
];

const itemsPerPage = 12;

const Destination = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([...baseData]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    search: null,
    min: null,
    max: null,
    sort: null,
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    setFilter(getCurrentFilter(location));
  }, [location]);

  useEffect(() => {
    handleFilter();
  }, [filter]);

  const handleFilter = () => {
    let tempArray;
    // Filter
    const min = filter.min ?? 0;
    const max = filter.max ?? 999999999;
    const search = filter.search?.toLowerCase() ?? "";
    tempArray = baseData.filter(
      (item) =>
        item.expense >= min &&
        item.expense <= max &&
        (hasAccent(search)
          ? item.name.toLowerCase().includes(search)
          : removeAccents(item.name.toLowerCase()).includes(search))
    );
    switch (filter.sort) {
      case "ascent":
        tempArray = tempArray.sort((a, b) => a.expense - b.expense);
        break;
      case "descent":
        tempArray = tempArray.sort((a, b) => b.expense - a.expense);
        break;
      default:
        break;
    }
    setData(tempArray);
    setCurrentPage(1);
  };

  const handleSortClick = (value) => {
    navigateToDestinationWithParams(
      { ...filter, sort: value === "default" ? null : value },
      navigate
    );
  };

  return (
    <div className="pb-[45px] relative">
      <ToursContainer
        tours={data.slice(startIndex, endIndex)}
        className={"mt-[25px]"}
      />
      <Pagination
        current={currentPage}
        onChange={setCurrentPage}
        pageSize={itemsPerPage}
        showSizeChanger={false}
        total={data.length}
        className="mt-[47px] w-fit mx-auto"
      />
      <div className="absolute -top-[77px] right-0 row gap-x-[19px]">
        <h4 className="font-semibold">Lọc theo:</h4>
        <Select
          defaultValue="default"
          style={{
            width: 200,
          }}
          value={!filter.sort ? "default" : filter.sort}
          onChange={handleSortClick}
          options={[
            {
              value: "default",
              label: "Mặc định",
            },
            {
              value: "ascent",
              label: "Giá tăng dần",
            },
            {
              value: "descent",
              label: "Giá giảm dần",
            },
          ]}
          suffixIcon={<img src={downArrowIcon} alt="Drop down" />}
        />
      </div>
    </div>
  );
};

export default Destination;
