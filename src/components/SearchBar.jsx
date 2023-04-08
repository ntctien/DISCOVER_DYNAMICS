import { locationIcon, priceIcon, typeIcon } from "../assets/search_icons";
import SearchBarItem from "./SearchBarItem";

const filters = [
  {
    title: "Địa điểm",
    icon: locationIcon,
    placeholder: "Bạn muốn đi đâu?",
    dropdown: false,
  },
  {
    title: "Giá cả",
    icon: priceIcon,
    placeholder: "Chọn mức giá ",
    dropdown: true,
  },
  {
    title: "Loại hình",
    icon: typeIcon,
    placeholder: "Chọn loại hình",
    dropdown: true,
  },
];

const SearchBar = () => {
  return (
    <div className="search-bar-container">
        <div className="row gap-x-[46px]">
          {filters.map((item, i) => (
            <SearchBarItem key={i} item={item} index={i} dropdown={item.dropdown}/>
          ))}
        </div>
        <button className="px-[52px] py-[18px] bg-blue rounded-5 text-medium text-white">Tìm kiếm</button>
    </div>
  );
};

export default SearchBar;
