import regions from "../../constants/regions";
import useNavigateToDestinationWithParams from "../../hooks/useNavigateToDestinationWithParams";
import DestinationItem from "./DestinationItem";

const DestinationContainer = () => {
  const navigateToDestinationWithParams = useNavigateToDestinationWithParams();
  
  const handleRegionClick = (region) => {
    navigateToDestinationWithParams({ region: region.title });
  };

  return (
    <div className="w-full mx-[20px] between-row mt-[37px]">
      {regions.map((destination, i) => (
        <DestinationItem
          key={i}
          {...destination}
          onClick={() => handleRegionClick(destination)}
        />
      ))}
    </div>
  );
};

export default DestinationContainer;
