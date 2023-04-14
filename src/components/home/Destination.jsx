import {
  northIcon,
  centralIcon,
  southIcon,
} from "../../assets/destination_icons";
import DestinationItem from "./DestinationItem";

const destinations = [
  { title: "Miền Bắc", icon: northIcon, titleColor: "#FCA2C8" },
  { title: "Miền Trung", icon: centralIcon, titleColor: "#42ADE2" },
  { title: "Miền Nam", icon: southIcon, titleColor: "#FCC21B" },
];

const Destination = () => {
  return (
    <div className="w-full mx-[20px] between-row mt-[37px]">
      {destinations.map((destination, i) => (
        <DestinationItem key={i} {...destination} />
      ))}
    </div>
  );
};

export default Destination;
