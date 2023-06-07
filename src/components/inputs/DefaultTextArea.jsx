import { Form, Input } from "antd";
import InputWrapper from "./InputWrapper";

const { TextArea } = Input;

const DefaultTextArea = ({ name, label, placeholder, required, fontSize }) => {
  return (
    <InputWrapper label={label} required={required} fontSize={fontSize}>
      <Form.Item name={name}>
        <TextArea placeholder={placeholder} className="text-18"/>
      </Form.Item>
    </InputWrapper>
  );
};

export default DefaultTextArea;
