import { useEffect, useState } from "react";
import { Form, Spin, message } from "antd";
import DefaultInput from "../inputs/DefaultInput";
import AddressForm from "./AddressForm";
import phoneNumberRule from "../../constants/phoneNumberRule";
import updateProfile from "../../api/services/updateProfile";
import fetchProfile from "../../api/services/fetchProfile";

const Profile = ({ user }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const province = form.getFieldValue("province");
  const district = form.getFieldValue("district");

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        setLoading(true);
        const profile = await fetchProfile(user.uid);
        form.setFieldsValue({ ...profile });
        setLoading(false);
      };
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSave = () => {
    form.validateFields().then(async (values) => {
      setLoading(true);
      await updateProfile({ uid: user.uid, ...values });
      message.success("Cập nhật thông tin cá nhân thành công!");
      setLoading(false);
    });
  };

  return (
    <div className="flex-1 bg-white rounded-10 p-5">
      <h2 className="font-semibold text-24">Thông tin cá nhân</h2>
      <Form form={form}>
        <Spin spinning={loading}>
          <div className="flex flex-col gap-y-5 mt-5">
            <DefaultInput name={"name"} label={"Họ và tên"} />
            <DefaultInput
              name={"phone"}
              type={"number"}
              label={"Số điện thoại"}
              placeholder={"567 890 123"}
              prefix={<p className="text-18 text-black47">+84</p>}
              rules={[phoneNumberRule]}
            />
            <DefaultInput
              name={"email"}
              label={"Email"}
              placeholder={"example@email.com"}
              readOnly
            />
            <AddressForm province={province} district={district} />
            <button
              onClick={handleSave}
              className="bg-orange rounded-5 font-medium text-18 text-white w-[100px] h-[40px] mx-auto hover:brightness-110"
            >
              LƯU
            </button>
          </div>
        </Spin>
      </Form>
    </div>
  );
};

export default Profile;
