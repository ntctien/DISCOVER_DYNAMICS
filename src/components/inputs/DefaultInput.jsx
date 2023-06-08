import { Form, Input } from "antd";
import InputWrapper from "./InputWrapper";

const DefaultInput = ({
  name,
  label,
  placeholder,
  required,
  prefix,
  type,
  readOnly,
  height,
  fontSize,
  rules,
}) => {
  return (
    <InputWrapper label={label} required={required} fontSize={fontSize}>
      <Form.Item name={name} rules={rules} initialValue={null}>
        <Input
          type={type}
          placeholder={placeholder}
          prefix={prefix}
          readOnly={readOnly}
          style={{
            backgroundColor: readOnly && "#D9D9D9",
            height: height ?? 54,
            fontSize: 18,
          }}
        />
      </Form.Item>
    </InputWrapper>
  );
};

export default DefaultInput;
