import DefaultSelect from "../inputs/DefaultSelect";
import useAddressSelect from "../../hooks/useAddressSelect";
import DefaultInput from "../inputs/DefaultInput";

const AddressForm = () => {
  const {
    provinces,
    districts,
    wards,
    handleChangeProvince,
    handleChangeDistrict,
  } = useAddressSelect();

  return (
    <>
      <DefaultInput name={"address"} label={"Địa chỉ "} />
      <DefaultSelect
        name={"province"}
        label={"Tỉnh thành"}
        placeholder={"Chọn tỉnh thành"}
        items={provinces}
        onChange={handleChangeProvince}
      />
      <DefaultSelect
        name={"district"}
        label={"Quận/huyện"}
        placeholder={"Chọn quận/huyện"}
        items={districts}
        onChange={handleChangeDistrict}
      />
      <DefaultSelect
        name={"ward"}
        label={"Phường/xã"}
        placeholder={"Chọn phường/xã"}
        items={wards}
      />
    </>
  );
};

export default AddressForm;
