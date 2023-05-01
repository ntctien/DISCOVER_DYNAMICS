import React from "react";
import DefaultInput from "../inputs/DefaultInput";
import AddressForm from "./AddressForm";

const Profile = () => {
  return (
    <div className="flex-1 bg-white rounded-10 p-5">
      <h2 className="font-semibold text-24">Thông tin cá nhân</h2>
      <div className="flex flex-col gap-y-5 mt-5">
        <DefaultInput label={"Họ và tên"}  />
        <DefaultInput
          type={"number"}
          label={"Số điện thoại"}
          placeholder={"567 890 123"}
          prefix={<p className="text-18 text-black47">+84</p>}
        />
        <DefaultInput
          label={"Email"}
          placeholder={"example@email.com"}
          readOnly
        />
        <DefaultInput label={"Địa chỉ "} />
        <AddressForm/>
        <button className="bg-orange rounded-5 font-medium text-18 text-white w-[100px] h-[40px] mx-auto hover:brightness-110">LƯU</button>
      </div>
    </div>
  );
};

export default Profile;
