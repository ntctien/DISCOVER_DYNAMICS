import { Input } from "antd";
import InputWrapper from "./InputWrapper";

const { TextArea } = Input;

const DefaultTextArea = ({ label, placeholder, required, fontSize }) => {
  return (
    <InputWrapper label={label} required={required} fontSize={fontSize}>
      <TextArea placeholder={placeholder} />
    </InputWrapper>
  );
};

export default DefaultTextArea;
