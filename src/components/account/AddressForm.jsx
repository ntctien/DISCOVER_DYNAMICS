import { useEffect } from "react";
import DefaultSelect from "../inputs/DefaultSelect";
import useAddressSelect from "../../hooks/useAddressSelect";
import DefaultInput from "../inputs/DefaultInput";

const AddressForm = ({ province, district }) => {
  const {
    provinces,
    districts,
    wards,
    handleChangeProvince,
    handleChangeDistrict,
    fetchDistricts,
    fetchWards,
  } = useAddressSelect();

  useEffect(() => {
    if (province && district) {
      const fetchData = async () => {
        await fetchDistricts(province);
        await fetchWards(district);
      };
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [province, district]);

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
