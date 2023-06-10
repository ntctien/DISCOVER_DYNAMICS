import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import getDestinationById from "../api/services/getDestinationById";
import { useEffect, useState } from "react";

const breadcrumbNameMap = {
  "/destination": "Điểm đến",
  "/about": "Về chúng tôi",
  "/account": "Thông tin tài khoản",
  "/contact": "Liên hệ",
};

const AppBreadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { destinationId } = useParams();
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);

  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const getBreadCrumbItemTitle = async (url) => {
    if (destinationId && url !== "/destination") {
      const destinationName = await getDestinationById(destinationId);
      return destinationName.location;
    }
    return breadcrumbNameMap[url];
  };

  useEffect(() => {
    const fetchBreadcrumbItems = async () => {
      //Check params
      const params = new URLSearchParams(location.search);
      const region = params.get("region");
      const type = params.get("type");

      const items = await Promise.all(
        pathSnippets.map(async (_, index) => {
          let url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
          let title;

          //Type
          if (type && !region) {
            title = "Loại hình tour";
            url += "?type=all";
          } else title = await getBreadCrumbItemTitle(url);

          return {
            key: url,
            title: title,
            onClick: () => {
              navigate(url);
            },
          };
        })
      );

      //Region
      if (region) {
        items.push({
          key: "region",
          title: region,
        });
      }

      //Type
      if (type && type !== "all" && !region) {
        items.push({
          key: type,
          title: type,
        });
      }

      setBreadcrumbItems(items);
    };

    fetchBreadcrumbItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinationId, location]);

  return (
    <Breadcrumb
      items={[
        {
          title: "Trang chủ",
          key: "home",
          onClick: () => {
            navigate("/");
          },
        },
        ...breadcrumbItems,
      ]}
      className="mt-[35px] px-[80px]"
    />
  );
};

export default AppBreadcrumb;
