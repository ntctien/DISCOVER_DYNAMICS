import { cloneElement } from "react";
import { Divider, Dropdown, theme } from "antd";
import SearchBarItem from "./SearchBarItem";
import { locationIcon, priceIcon, typeIcon } from "../../assets/search_icons";
import PriceInput from "./PriceInput";

const { useToken } = theme;

const filters = [
  {
    id: "location",
    title: "Địa điểm",
    icon: locationIcon,
    placeholder: "Bạn muốn đi đâu?",
    dropdown: false,
    readOnly: false,
  },
  {
    id: "price",
    title: "Giá cả",
    icon: priceIcon,
    placeholder: "Chọn mức giá ",
    dropdown: true,
    readOnly: true,
  },
  {
    id: "type",
    title: "Loại hình",
    icon: typeIcon,
    placeholder: "Chọn loại hình",
    dropdown: true,
    readOnly: true,
  },
];

const items = [
  {
    key: "1",
    label: "Dưới 2 triệu",
  },
  {
    key: "2",
    label: "2 triệu - 3 triệu",
  },
  {
    key: "3",
    label: "3 triệu - 5 triệu",
  },
  {
    key: "4",
    label: "5 triệu - 10 triệu",
  },
  {
    key: "5",
    label: "Trên 10 triệu",
  },
];

const SearchBar = () => {
  const { token } = useToken();

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: "10px",
    boxShadow: token.boxShadowSecondary,
    padding: "20px 10px",
    width: "300px",
    fontFamily: "Montserrat",
  };

  const menuStyle = {
    boxShadow: "none",
  };

  return (
    <div className="relative w-fit mx-auto">
      <div className="h-2 w-full bg-white absolute -top-2"></div>
      <div className="search-bar-container">
        <div className="row gap-x-[46px]">
          {filters.map((item, i) => (
            <Dropdown
              menu={{
                items,
              }}
              disabled={item.id !== "price"}
              dropdownRender={(menu) => (
                <div style={contentStyle}>
                  {cloneElement(menu, {
                    style: menuStyle,
                  })}
                  <Divider className="mt-[15px] mb-5" />
                  <div className="row gap-x-[15px]">
                    <PriceInput placeholder="Tối thiểu" />
                    <div className="w-[10px] h-[1px] bg-black" />
                    <PriceInput placeholder="Tối đa"/>
                  </div>
                  <button className="w-full h-[40px] bg-orange rounded-5 text-16 text-white mt-[15px]">
                    Tìm theo giá mong muốn
                  </button>
                </div>
              )}
            >
              <button disabled={item.id !== "price"}>
                <SearchBarItem key={i} item={item} index={i} />
              </button>
            </Dropdown>
          ))}
        </div>
        <button className="px-[52px] py-[18px] bg-blue rounded-5 text-medium text-white">
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
