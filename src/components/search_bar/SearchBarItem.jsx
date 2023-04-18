import { downArrowIcon } from "../../assets/arrow_icons";

const SearchBarItem = ({ item, index, value, setValue }) => {
  return (
    <div className="flex">
      {index !== 0 && <div className="w-[1px] bg-grey mr-5" />}
      <img src={item.icon} alt={item.title} className="self-start" />
      <div className="ml-[9px]">
        <p className="text-medium text-left">{item.title}</p>
        <input
          readOnly={item.readOnly}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={item.placeholder}
          className={`search-bar-input ${item.readOnly && "cursor-default truncate"}`}
        />
      </div>
      {item.dropdown && (
        <img
          src={downArrowIcon}
          alt="Dropdown"
          className="self-center h-[30px]"
        />
      )}
    </div>
  );
};

export default SearchBarItem;
