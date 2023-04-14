import numberWithDots from "../utils/numberWithDots";

const TourItem = ({ name, duration, description, expense, image }) => {
  return (
    <div className="bg-white w-full rounded-5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
      <img
        src={image}
        alt="Tour thumbnail"
        className="aspect-[4/3] object-cover"
      />
      <div className="pt-[13px] pb-[15px] px-[25px]">
        <h3 className="font-bold text-24 text-green">{name}</h3>
        <p className="text-16 mt-[1px]">{duration}</p>
        <p className="text-description mt-[17px]">
          Trải nghiệm đạp xe, đi bộ khám phá non nước Cao Bằng
        </p>
        <div className="between-row mt-[17px]">
          <p className="font-medium text-red">
            {numberWithDots(expense) + " VNĐ"}
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
