import { DatePicker } from "antd";
import InputWrapper from "./InputWrapper";

const DefaultDatePicker = ({ label, required, placeholder }) => {
  return (
    <InputWrapper label={label} required={required}>
      <DatePicker placeholder={placeholder} />
    </InputWrapper>
  );
};

export default DefaultDatePicker;
