import { Input } from "antd";
import InputWrapper from "./InputWrapper";

const DefaultInput = ({
  label,
  placeholder,
  required,
  prefix,
  type,
  readOnly,
}) => {
  return (
    <InputWrapper label={label} required={required}>
      <Input
        type={type}
        placeholder={placeholder}
        prefix={prefix}
        readOnly={readOnly}
        style={{ backgroundColor: readOnly && "#D9D9D9" }}
      />
    </InputWrapper>
  );
};

export default DefaultInput;
