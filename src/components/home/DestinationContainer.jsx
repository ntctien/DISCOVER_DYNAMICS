import {
  northIcon,
  centralIcon,
  southIcon,
} from "../../assets/destination_icons";
import useNavigateToDestinationWithParams from "../../hooks/useNavigateToDestinationWithParams";
import DestinationItem from "./DestinationItem";

const destinations = [
  { title: "Miền Bắc", icon: northIcon, titleColor: "#FCA2C8" },
  { title: "Miền Trung", icon: centralIcon, titleColor: "#42ADE2" },
  { title: "Miền Nam", icon: southIcon, titleColor: "#FCC21B" },
];

const DestinationContainer = () => {
  const navigateToDestinationWithParams = useNavigateToDestinationWithParams();
  
  const handleRegionClick = (region) => {
    navigateToDestinationWithParams({ region: region.title });
  };

  return (
    <div className="w-full mx-[20px] between-row mt-[37px]">
      {destinations.map((destination, i) => (
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
