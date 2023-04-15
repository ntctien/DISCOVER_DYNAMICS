import { useLocation, useNavigate } from "react-router-dom";
import './SearchLayout.css';
import SearchBar from "../../components/SearchBar";
import { Outlet } from "react-router-dom";
import { Breadcrumb } from "antd";

const breadcrumbNameMap = {
  "/destination": "Điểm đến",
  "/destination/detail": "Cao Bằng",
  "/about": "Về chúng tôi",
};

const SearchLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      key: url,
      title: breadcrumbNameMap[url],
      onClick: () => {
        navigate(url);
      },
    };
  });

  const breadcrumbItems = [
    {
      title: "Trang chủ",
      key: "home",
      onClick: () => {
        navigate("/");
      },
    },
  ].concat(extraBreadcrumbItems);

  return (
    <div className="px-[80px]">
      <SearchBar />
      <Breadcrumb items={breadcrumbItems} className="mt-[35px]"/>
      <Outlet />
    </div>
  );
};

export default SearchLayout;
