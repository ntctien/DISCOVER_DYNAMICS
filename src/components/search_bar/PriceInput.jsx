import { InputNumber } from "antd";

const PriceInput = ({ placeholder }) => {
  return (
    <InputNumber
      type="number"
      controls={false}
      placeholder={placeholder}
      className="price-input"
    />
  );
};

export default PriceInput;
