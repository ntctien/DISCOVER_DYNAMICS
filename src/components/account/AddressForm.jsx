import DefaultSelect from "../inputs/DefaultSelect";
import useAddressSelect from "../../hooks/useAddressSelect";

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
      <DefaultSelect
        label={"Tỉnh thành"}
        placeholder={"Chọn tỉnh thành"}
        items={provinces}
        onChange={handleChangeProvince}
      />
      <DefaultSelect
        label={"Quận/huyện"}
        placeholder={"Chọn quận/huyện"}
        items={districts}
        onChange={handleChangeDistrict}
      />
      <DefaultSelect
        label={"Phường/xã"}
        placeholder={"Chọn phường/xã"}
        items={wards}
      />
    </>
  );
};

export default AddressForm;
