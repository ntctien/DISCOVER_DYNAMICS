import { InputNumber, Form } from "antd";

const PriceInput = ({ placeholder, name}) => {
  return (
    <Form.Item name={name}>
      <InputNumber
        type="number"
        min={0}
        max={999999999}
        controls={false}
        placeholder={placeholder}
        className="price-input"
      />
    </Form.Item>
  );
};

export default PriceInput;
