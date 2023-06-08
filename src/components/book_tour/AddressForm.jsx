import useAddressSelect from "../../hooks/useAddressSelect";
import DefaultInput from "../inputs/DefaultInput";
import DefaultSelect from "../inputs/DefaultSelect";

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
      <div className="book-form-row">
        <DefaultInput name={"address"} label={"Địa chỉ "} />
        <DefaultSelect
          name={"province"}
          label={"Tỉnh thành"}
          placeholder={"Chọn tỉnh thành"}
          items={provinces}
          onChange={handleChangeProvince}
        />
      </div>
      <div className="book-form-row">
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
      </div>
    </>
  );
};

export default AddressForm;
