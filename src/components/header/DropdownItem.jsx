import { Modal } from "antd";
import SignIn from "../modals/SignIn";


const DropdownItem = ({label}) => {
  return (
    <center>
      <a>
        <SignIn>
          {label}
        </SignIn>
      </a>
    </center>
  );
};

export default DropdownItem;
