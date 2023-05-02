import { Input } from "antd";
import InputWrapper from "./InputWrapper";

const DefaultInput = ({
  label,
  placeholder,
  required,
  prefix,
  type,
  readOnly,
  height,
  fontSize
}) => {
  return (
    <InputWrapper label={label} required={required} fontSize={fontSize}>
      <Input
        type={type}
        placeholder={placeholder}
        prefix={prefix}
        readOnly={readOnly}
        style={{ backgroundColor: readOnly && "#D9D9D9",height: height ?? 54 }}
      />
    </InputWrapper>
  );
};

export default DefaultInput;
