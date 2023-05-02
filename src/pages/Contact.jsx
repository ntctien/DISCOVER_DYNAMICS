import React from "react";
import DefaultInput from "../components/inputs/DefaultInput";
import DefaultTextArea from "../components/inputs/DefaultTextArea";
import { locationIcon, phoneIcon, emailIcon } from "../assets/contact_icons";
import mapImg from "../assets/mapTemp.jpg";

const contactInformations = [
  {
    text: "Khu phố 6, phường Linh Trung, TP. Thủ Đức, TPHCM",
    icon: locationIcon,
  },
  {
    text: "09xx xxx xxx",
    icon: phoneIcon,
  },
  {
    text: "discoverdynamics@gmail.com",
    icon: emailIcon,
  },
];

const Contact = () => {
  return (
    <div className="relative">
      <img src={mapImg} alt="Map" className="w-screen mt-[31px]" />
      <div className="w-[45%] bg-white rounded-20 absolute -top-[65px] right-[30px] p-[25px]">
        <h1 className="font-semibold text-24">Hỗ trợ dịch vụ Tour</h1>
        <div className="row gap-x-[40px] gap-y-5 flex-wrap mt-5">
          {contactInformations.map((item, i) => (
            <div key={i} className={`row  gap-x-5 ${i === 0 && "w-[54%]"}`}>
              <div className="w-[50px] h-[50px] rounded-full outline-dashed outline-1 outline-blue relative flex-none">
                <img
                  src={item.icon}
                  alt="Contact"
                  className="absolute-center"
                />
              </div>
              <p className="font-medium text-15">{item.text}</p>
            </div>
          ))}
        </div>
        {/* Send feedback */}
        <div className="p-5 rounded-15 border-1 border-blue mt-5 flex flex-col">
          <h2 className="font-semibold">Gửi phản hồi</h2>
          <div className="flex flex-col gap-y-[15px] mt-5">
            <div className="flex gap-x-5">
              <DefaultInput label={"Họ và tên"} height={42} fontSize={15} />
              <DefaultInput
                type={"number"}
                label={"Số điện thoại"}
                placeholder={"567 890 123"}
                prefix={<p className="text-15 text-black47">+84</p>}
                height={42}
                fontSize={15}
              />
            </div>
            <DefaultInput
              label={"Email"}
              placeholder={"example@email.com"}
              required
              height={42}
              fontSize={15}
            />
            <DefaultTextArea
              label={"Nội dung"}
              placeholder={"Nội dung liên hệ"}
              required
              fontSize={15}
            />
          </div>
          <button className="w-[100px] h-[40px] bg-orange hover:brightness-110 rounded-5 font-medium text-18 text-white mt-[10px] self-center">
            GỬI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
