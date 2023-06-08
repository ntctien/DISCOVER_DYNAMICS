import { Form, Select } from "antd";
import InputWrapper from "./InputWrapper";

const { Option } = Select;

const DefaultSelect = ({ name, label, items, placeholder, onChange }) => {
  return (
    <InputWrapper label={label}>
      <Form.Item name={name} initialValue={null}>
        <Select onChange={onChange} placeholder={placeholder}>
          {items?.map((d, i) => (
            <Option key={i} value={d.code + "_" + d.name}>
              {d.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </InputWrapper>
  );
};

export default DefaultSelect;
