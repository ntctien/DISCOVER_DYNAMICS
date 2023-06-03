import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "antd";
import DropdownButton from "./DropdownButton";
import DropdownItem from "./DropdownItem";
import logo from "../../assets/logo.png";
import accountIcon from "../../assets/account.svg";
import { useState } from "react";
import SignIn from "../modals/SignIn";
import SignUp from "../modals/SignUp";
import LogOut from "../modals/LogOut";
import ChangePassword from "../modals/ChangePassword";

const Header = () => {
  const navigate = useNavigate();
  const [currentModal, setCurrentModal] = useState(null);
  const currentUser = false;
  const admin = false;

  const dropDownItems = {
    destination: [],
    tourType: [],
    account: currentUser
      ? [
          {
            key: "change-password",
            label: (
              <DropdownItem
                label={"Đổi mật khẩu"}
                onClick={() => setCurrentModal("change-password")}
              />
            ),
          },
          {
            key: "sign-out",
            label: (
              <DropdownItem
                label={"Đăng xuất"}
                onClick={() => setCurrentModal("sign-out")}
              />
            ),
          },
        ]
      : [
          {
            key: "sign-in",
            label: (
              <DropdownItem
                label={"Đăng nhập"}
                onClick={() => setCurrentModal("sign-in")}
              />
            ),
          },
          {
            key: "sign-up",
            label: (
              <DropdownItem
                label={"Đăng ký"}
                onClick={() => setCurrentModal("sign-up")}
              />
            ),
          },
        ],
  };

  return (
    <div className="between-row font-medium text-24 px-[40px] bg-white">
      {/* Logo */}
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="h-[80px]" />
      </Link>
      {/* Menu */}
      <div className="row flex-1 justify-center gap-x-[56px]">
        <DropdownButton
          items={dropDownItems.destination}
          label={"Điểm đến"}
          linkTo={"/destination"}
        />
        <DropdownButton
          items={dropDownItems.tourType}
          label={"Loại hình tour"}
        />
        <Link to={"/about"}>
          <p className="cursor-pointer">Về chúng tôi</p>
        </Link>
        {admin ? (
          <Link to={"/booked-tours"}>
            <p className="cursor-pointer">Tour được đặt</p>
          </Link>
        ) : (
          <Link to={"/contact"}>
            <p className="cursor-pointer">Liên hệ</p>
          </Link>
        )}
      </div>
      {/* Account */}
      <Dropdown menu={{ items: dropDownItems.account }}>
        <div
          onClick={(e) => {
            e.preventDefault();
            navigate("/account");
          }}
          className="row gap-x-[13px] cursor-pointer"
        >
          <img src={accountIcon} alt="Account" />
          <p>Tài khoản</p>
        </div>
      </Dropdown>
      <SignIn
        open={currentModal === "sign-in"}
        handleCancel={() => setCurrentModal(null)}
        handleSignUp={() => setCurrentModal("sign-up")}
      />
      <SignUp
        open={currentModal === "sign-up"}
        handleCancel={() => setCurrentModal(null)}
        handleSignIn={() => setCurrentModal("sign-in")}
      />
      <LogOut
        open={currentModal === "sign-out"}
        handleCancel={() => setCurrentModal(null)}
      />
      <ChangePassword
        open={currentModal === "change-password"}
        handleCancel={() => setCurrentModal(null)}
      />
    </div>
  );
};

export default Header;
