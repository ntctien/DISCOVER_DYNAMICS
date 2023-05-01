import "./SearchLayout.css";
import SearchBar from "../../components/search_bar/SearchBar";
import { Outlet } from "react-router-dom";
import AppBreadcrumb from "../../components/AppBreadcrumb";

const SearchLayout = () => {
  return (
    <div className="px-[80px]">
      <SearchBar />
      <AppBreadcrumb />
      <Outlet />
    </div>
  );
};

export default SearchLayout;
