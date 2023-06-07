import { DatePicker, Form } from "antd";
import InputWrapper from "./InputWrapper";

const DefaultDatePicker = ({
  name,
  label,
  required,
  placeholder,
  initialValue,
  onChange,
  value
}) => {
  return (
    <InputWrapper label={label} required={required}>
      <Form.Item name={name} initialValue={initialValue}>
        <DatePicker
          placeholder={placeholder}
          format={"DD/MM/YYYY"}
          value={value}
          onChange={onChange}
        />
      </Form.Item>
    </InputWrapper>
  );
};

export default DefaultDatePicker;
