import { useNavigate } from "react-router-dom";
import numberWithDots from "../utils/numberWithDots";
import getDurationString from "../utils/getDurationString";
import useBookTour from "../hooks/useBookTour";

const TourItem = ({ tour }) => {
  const navigate = useNavigate();
  const handleBookTour = useBookTour();

  const handleOnClick = () => {
    navigate(`/destination/${tour?.id}`);
  };

  const handleBookTourBtnClick = (e) => {
    e.stopPropagation();
    handleBookTour(tour?.id);
  };

  return (
    <div
      onClick={handleOnClick}
      className="bg-white w-full flex flex-col rounded-5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer"
    >
      <img
        src={tour?.tourImages?.length > 0 && tour?.tourImages[0]}
        alt="Tour thumbnail"
        className="aspect-[4/3] object-cover"
      />
      <div className="pt-[13px] pb-[15px] px-[25px] flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-24 text-green">{tour?.location}</h3>
          <p className="text-16 mt-[1px]">
            {getDurationString(tour?.dayDuration, tour?.nightDuration)}
          </p>
          <p className="text-description mt-[17px]">{tour?.shortDescription}</p>
        </div>
        <div className="between-row mt-[17px]">
          <p className="font-medium text-red">
            {tour?.price != null && numberWithDots(tour?.price) + " VNĐ"}
          </p>
          <button
            onClick={handleBookTourBtnClick}
            className="px-[12px] py-[9px] bg-orange rounded-5 font-medium text-18 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          >
            ĐẶT TOUR
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
