import { useEffect, useState } from "react";
import provinceApi from "../api/provinceApi";
import sortByName from "../utils/sortByName";
import handleApiCallError from "../utils/handleApiCallError";

const useAddressSelect = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    fetchProvinces();
  }, []);

  // Fetch province at first render\
  const fetchProvinces = async () => {
    try {
      const response = await provinceApi.get("/p");
      setProvinces(sortByName(response.data));
    } catch (err) {
      handleApiCallError(err);
    }
  };

  // Fetch district after selected province
  const fetchDistricts = async (province) => {
    try {
      const str = String(province);
      const code = str.substring(0, str.indexOf("_"));
      const response = await provinceApi.get(`p/${code}`, {
        params: {
          depth: 2,
        },
      });
      setDistricts(sortByName(response.data.districts));
      setWards([]);
    } catch (err) {
      handleApiCallError(err);
    }
  };

  // Fetch wards after selected district
  const fetchWards = async (district) => {
    try {
      const str = String(district);
      const code = str.substring(0, str.indexOf("_"));
      const response = await provinceApi.get(`d/${code}`, {
        params: {
          depth: 2,
        },
      });

      setWards(sortByName(response.data.wards));
    } catch (err) {
      handleApiCallError(err);
    }
  };

  const handleChangeProvince = (value) => {
    if (value !== "default") {
      fetchDistricts(value);
    }
  };

  const handleChangeDistrict = (value) => {
    if (value !== "default") {
      fetchWards(value);
    }
  };

  return {
    provinces,
    districts,
    wards,
    handleChangeProvince,
    handleChangeDistrict,
  };
};

export default useAddressSelect;
