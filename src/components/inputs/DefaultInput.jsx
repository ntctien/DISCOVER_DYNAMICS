import { Input } from "antd";
import InputWrapper from "./InputWrapper";

const DefaultInput = ({ label, placeholder, required, prefix, type }) => {
  return (
    <InputWrapper label={label} required={required}>
      <Input type={type} placeholder={placeholder} prefix={prefix} />
    </InputWrapper>
  );
};

export default DefaultInput;
