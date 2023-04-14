import TourTypeItem from "./TourTypeItem";
import {
  camTraiIcon,
  cheoThuyenIcon,
  dapXeIcon,
  diBoIcon,
  giaiTriIcon,
  khamPhaIcon,
  lanBienIcon,
  leoNuiIcon,
  vuotThacIcon,
} from "../../assets/tour_type_icons";

const tourTypes = [
  { title: "Đi bộ", icon: diBoIcon },
  { title: "Đạp xe", icon: dapXeIcon },
  { title: "Khám phá", icon: khamPhaIcon },
  { title: "Leo núi", icon: leoNuiIcon },
  { title: "Chèo thuyền", icon: cheoThuyenIcon },
  { title: "Cắm trại", icon: camTraiIcon },
  { title: "Vượt thác", icon: vuotThacIcon },
  { title: "Lặn biển", icon: lanBienIcon },
  { title: "Giải trí", icon: giaiTriIcon },
];

const TourType = () => {
  return (
    <div className="w-full row overflow-x-auto gap-x-[45px] mt-[37px] tour-type pb-[19px]">
      {tourTypes.map((type, i) => (
        <TourTypeItem key={i} {...type} />
      ))}
    </div>
  );
};

export default TourType;
