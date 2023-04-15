import { Pagination } from "antd";
import ToursContainer from "../components/ToursContainer";
import tours from "../constants/tours";
import { nextArrowIcon, prevArrowIcon } from "../assets/arrow_icons";

const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return <img src={prevArrowIcon} alt="Previous" />;
  }
  if (type === "next") {
    return <img src={nextArrowIcon} alt="Next" />;
  }
  return originalElement;
};

const Destination = () => {
  return (
    <div className="pb-[45px]">
      <ToursContainer tours={tours} className={"mt-[25px]"} />
      <Pagination
        defaultCurrent={1}
        total={50}
        className="mt-[47px] w-fit mx-auto"
      />
    </div>
  );
};

export default Destination;
