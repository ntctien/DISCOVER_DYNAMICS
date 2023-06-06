import TourItem from "./TourItem";

const ToursContainer = ({ tours, className }) => {
  return (
    <div
      className={`grid gap-y-7 w-full place-content-between ${className}`}
      style={{ gridTemplateColumns: "repeat(3, minmax(0, 30%))" }}
    >
      {tours?.map((tour, i) => (
        <TourItem key={i} tour={tour} />
      ))}
    </div>
  );
};

export default ToursContainer;
