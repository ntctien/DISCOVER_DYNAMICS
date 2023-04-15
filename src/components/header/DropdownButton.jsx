import { useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import {downArrowIcon} from "../../assets/arrow_icons";

const DropdownButton = ({ items, label, linkTo }) => {
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    navigate(linkTo);
    e.preventDefault()
  }

  return (
    <Dropdown menu={{ items }}>
      <div
        onClick={handleOnClick}
        className="flex items-end cursor-pointer"
      >
        <p>{label}</p>
        <img src={downArrowIcon} alt="Drop down" />
      </div>
    </Dropdown>
  );
};

export default DropdownButton;
