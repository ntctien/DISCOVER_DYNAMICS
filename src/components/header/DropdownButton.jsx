import { useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import arrowIcon from "../../assets/arrow-down.svg";

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
        <img src={arrowIcon} alt="Drop down" />
      </div>
    </Dropdown>
  );
};

export default DropdownButton;
