import { useNavigate } from "react-router-dom";
import numberWithDots from "../utils/numberWithDots";

const TourItem = ({ tour }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/destination/${tour.id}`);
  };

  return (
    <div
      onClick={handleOnClick}
      className="bg-white w-full flex flex-col rounded-5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer"
    >
      <img
        src={tour.tourImages[0]}
        alt="Tour thumbnail"
        className="aspect-[4/3] object-cover"
      />
      <div className="pt-[13px] pb-[15px] px-[25px] flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-24 text-green">{tour.location}</h3>
          <p className="text-16 mt-[1px]">
            {tour.dayDuration + " ngày " + tour.nightDuration + " đêm"}
          </p>
          <p className="text-description mt-[17px]">{tour.shortDescription}</p>
        </div>
        <div className="between-row mt-[17px]">
          <p className="font-medium text-red">
            {numberWithDots(tour.price) + " VNĐ"}
          </p>
          <button className="px-[12px] py-[9px] bg-orange rounded-5 font-medium text-18 text-white">
            ĐẶT TOUR
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
