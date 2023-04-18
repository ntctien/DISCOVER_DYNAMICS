import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Pagination, Select } from "antd";
import ToursContainer from "../components/ToursContainer";
import tours from "../constants/tours";
import { downArrowIcon } from "../assets/arrow_icons";
import getCurrentFilter from "../utils/getCurrentFilter";

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

const filterTypes = ["search", "min", "max"];

const Destination = () => {
  const location = useLocation();
  const [data, setData] = useState([...baseData]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({ search: null, min: null, max: null });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    setFilter(getCurrentFilter(location));
  }, [location]);

  useEffect(() => {
    const min = filter.min ?? 0;
    const max = filter.max ?? 999999999;
    let tempArray = baseData.filter(
      (item) => item.expense >= min && item.expense <= max
    );
    setData(tempArray);
  }, [filter]);

  const handleFilter = (value) => {
    let tempArray;
    switch (value) {
      case "default":
        setData([...baseData]);
        break;
      case "ascent":
        tempArray = data.sort((a, b) => a.expense - b.expense);
        setData([...tempArray]);
        break;
      case "descent":
        tempArray = data.sort((a, b) => b.expense - a.expense);
        setData([...tempArray]);
        break;
      default:
        break;
    }
    setCurrentPage(1);
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
          onChange={handleFilter}
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
