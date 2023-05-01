import { Select } from "antd";
import InputWrapper from "./InputWrapper";

const { Option } = Select;

const DefaultSelect = ({ label, items, placeholder }) => {
  return (
    <InputWrapper label={label}>
      <Select placeholder={placeholder}>
        {items?.map((d, i) => (
          <Option key={i} value={d.code + "_" + d.name}>
            {d.name}
          </Option>
        ))}
      </Select>
    </InputWrapper>
  );
};

export default DefaultSelect;
