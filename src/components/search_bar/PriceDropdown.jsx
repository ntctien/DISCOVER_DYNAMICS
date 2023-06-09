import { cloneElement, useState } from "react";
import { Divider, Dropdown, Form, theme } from "antd";
import PriceInput from "./PriceInput";
import getPriceText from "../../utils/getPriceText";

const { useToken } = theme;

const priceMap = {
  0: {
    text: "Dưới 2 triệu",
    min: null,
    max: 1999999,
  },
  1: {
    text: "2 triệu - 3 triệu",
    min: 2000000,
    max: 3000000,
  },
  2: {
    text: "3 triệu - 5 triệu",
    min: 3000000,
    max: 5000000,
  },
  3: {
    text: "5 triệu - 10 triệu",
    min: 5000000,
    max: 10000000,
  },
  4: {
    text: "Trên 10 triệu",
    min: 10000001,
    max: null,
  },
};

const priceItems = Object.keys(priceMap).map((key) => {
  return { key: key, label: priceMap[key].text };
});

const PriceDropdown = ({ children, searchData, setSearchData }) => {
  const { token } = useToken();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

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

  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  const handlePriceClick = ({ key }) => {
    const priceInfo = priceMap[key];
    setSearchData({ ...searchData, price: { ...priceInfo } });
    setOpen(false);
  };

  const onFinish = (value) => {
    const min = value.min;
    const max = value.max;
    if (min > max) setError(true);
    else {
      setError(false);
      setSearchData({
        ...searchData,
        price: {
          text: getPriceText(min, max),
          min,
          max,
        },
      });
      setOpen(false);
      form.resetFields();
    }
  };
  return (
    <Dropdown
      menu={{
        items: priceItems,
        onClick: handlePriceClick,
      }}
      dropdownRender={(menu) => (
        <div style={contentStyle}>
          {cloneElement(menu, {
            style: menuStyle,
          })}
          <Divider className="mt-[15px] mb-5" />
          <Form form={form} onFinish={onFinish}>
            <div className="row gap-x-[15px]">
              <PriceInput name={"min"} placeholder="Tối thiểu" />
              <div className="w-[10px] h-[1px] bg-black" />
              <PriceInput name={"max"} placeholder="Tối đa" />
            </div>
            {error && (
              <p className="text-center text-red mt-1">Giá trị không hợp lệ</p>
            )}
            <Form.Item>
              <button
                type="submit"
                className="w-full h-[40px] font-montserrat bg-orange rounded-5 text-16 text-white mt-[15px]"
              >
                Tìm theo giá mong muốn
              </button>
            </Form.Item>
          </Form>
        </div>
      )}
      open={open}
      onOpenChange={handleOpenChange}
    >
      <button>{children}</button>
    </Dropdown>
  );
};

export default PriceDropdown;
