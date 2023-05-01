import { Input } from "antd";
import InputWrapper from "./InputWrapper";

const { TextArea } = Input;

const DefaultTextArea = ({ label, placeholder }) => {
  return (
    <InputWrapper label={label}>
      <TextArea placeholder={placeholder}/>
    </InputWrapper>
  );
};

export default DefaultTextArea;
