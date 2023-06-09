import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Pagination, Select } from "antd";
import ToursContainer from "../components/ToursContainer";
import { downArrowIcon } from "../assets/arrow_icons";
import getCurrentFilter from "../utils/getCurrentFilter";
import removeAccents from "../utils/removeAccents";
import hasAccent from "../utils/hasAccent";
import useDestination from "../hooks/useDestination";
import useNavigateToDestinationWithParams from "../hooks/useNavigateToDestinationWithParams";

const itemsPerPage = 12;

const Destination = () => {
  const location = useLocation();
  const navigateToDestinationWithParams = useNavigateToDestinationWithParams();
  const [baseData, setBaseData] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    search: null,
    min: null,
    max: null,
    sort: null,
  });
  const { destinations } = useDestination(() => setBaseData([...destinations]));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    if (baseData) setFilter(getCurrentFilter(location));
  }, [location, baseData]);

  useEffect(() => {
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleFilter = () => {
    let tempArray;
    // Filter
    const min = filter.min ?? 0;
    const max = filter.max ?? 999999999;
    const search = filter.search?.toLowerCase() ?? "";
    tempArray = baseData.filter(
      (item) =>
        item.price >= min &&
        item.price <= max &&
        (hasAccent(search)
          ? item.location.toLowerCase().includes(search)
          : removeAccents(item.location.toLowerCase()).includes(search))
    );
    switch (filter.sort) {
      case "ascent":
        tempArray = tempArray.sort((a, b) => a.price - b.price);
        break;
      case "descent":
        tempArray = tempArray.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setData(tempArray);
    setCurrentPage(1);
  };

  const handleSortClick = (value) => {
    navigateToDestinationWithParams({
      ...filter,
      sort: value === "default" ? null : value,
    });
  };

  return (
    <div className="pb-[45px] relative px-[80px]">
      <ToursContainer
        tours={data?.slice(startIndex, endIndex)}
        className={"mt-[25px]"}
      />
      <Pagination
        current={currentPage}
        onChange={setCurrentPage}
        pageSize={itemsPerPage}
        showSizeChanger={false}
        total={data?.length}
        className="mt-[47px] w-fit mx-auto"
      />
      <div className="absolute -top-[77px] right-[80px] row gap-x-[19px]">
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
          className="destination-filter"
        />
      </div>
    </div>
  );
};

export default Destination;
