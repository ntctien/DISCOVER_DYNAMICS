import { Spin } from "antd";
import TourItem from "./TourItem";

const ToursContainer = ({ tours, className, loading }) => {
  return (
    <div>
      {!loading ? (
        <div
          className={`grid gap-y-7 w-full place-content-between ${className}`}
          style={{ gridTemplateColumns: "repeat(3, minmax(0, 30%))" }}
        >
          {tours?.map((tour, i) => (
            <TourItem key={i} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center mt-[20px] pt-[10px]">
          <Spin />
        </div>
      )}
    </div>
  );
};

export default ToursContainer;
