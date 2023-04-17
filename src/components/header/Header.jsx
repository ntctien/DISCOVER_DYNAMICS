import { Dropdown } from "antd";
import DropdownButton from "./DropdownButton";
import DropdownItem from "./DropdownItem";
import logo from "../../assets/logo.png";
import accountIcon from "../../assets/account.svg";
import { useState } from "react";
import SignIn from "../modals/SignIn";
import SignUp from "../modals/SignUp";

const Header = () => {
  const [currentModal, setCurrentModal] = useState(null);

  const dropDownItems = {
    destination: [],
    tourType: [],
    account: [
      {
        key: "sign-in",
        label: <DropdownItem label={'Đăng nhập'} onClick={()=>setCurrentModal('sign-in')}/>,
      },
      {
        key: "sign-up",
        label: <DropdownItem label={'Đăng ký'} onClick={()=>setCurrentModal('sign-up')}/>,
      },
    ],
  };

  return (
    <div className="between-row font-medium text-24 px-[40px]">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-[80px]" />
      {/* Menu */}
      <div className="row flex-1 justify-center gap-x-[56px]">
        <DropdownButton items={dropDownItems.destination} label={"Điểm đến"} />
        <DropdownButton
          items={dropDownItems.tourType}
          label={"Loại hình tour"}
        />
        <p>Về chúng tôi</p>
        <p>Liên hệ</p>
      </div>
      {/* Account */}
      <Dropdown menu={{ items: dropDownItems.account }}>
        <div onClick={(e) => e.preventDefault()} className="row gap-x-[13px]">
          <img src={accountIcon} alt="Account" />
          <p>Tài khoản</p>
        </div>
      </Dropdown>
      <SignIn open={currentModal==='sign-in'} handleCancel={()=>setCurrentModal(null)}/>
      <SignUp open={currentModal==='sign-up'} handleCancel={()=>setCurrentModal(null)}/>
    </div>
  );
};

export default Header;
