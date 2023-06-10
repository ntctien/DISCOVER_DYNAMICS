import TourTypeItem from "./TourTypeItem";
import tourTypes from "../../constants/tourTypes";
import useNavigateToDestinationWithParams from "../../hooks/useNavigateToDestinationWithParams";

const TourType = () => {
  const navigateToDestinationWithParams = useNavigateToDestinationWithParams();

  const handleItemClick = (item) => {
    navigateToDestinationWithParams({ type: item.title });
  };

  return (
    <div className="w-full row overflow-x-auto gap-x-[45px] mt-[37px] tour-type pb-[19px]">
      {tourTypes.map((type, i) => (
        <TourTypeItem key={i} {...type} onClick={() => handleItemClick(type)} />
      ))}
    </div>
  );
};

export default TourType;
