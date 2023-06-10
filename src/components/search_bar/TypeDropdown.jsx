import { Dropdown } from "antd";
import tourTypes from "../../constants/tourTypes";

const typeItems = tourTypes.map((type) => {
  return {
    key: type.title,
    label: type.title,
  };
});

const TypeDropdown = ({ children, setSearchData }) => {
  const handleTypeClick = ({ key }) => {
    setSearchData((prev) => {
      return { ...prev, type: key };
    });
  };
  return (
    <Dropdown menu={{ items: typeItems, onClick: handleTypeClick }}>
      <button>{children}</button>
    </Dropdown>
  );
};

export default TypeDropdown;
