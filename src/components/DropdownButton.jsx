import { Dropdown } from "antd";
import arrowIcon from "../assets/arrow-down.svg";

const DropdownButton = ({ items, label }) => {
  return (
    <Dropdown menu={{ items }}>
      <div className="flex items-end">
        <p>{label}</p>
        <img src={arrowIcon} alt="Drop down" />
      </div>
    </Dropdown>
  );
};

export default DropdownButton;
