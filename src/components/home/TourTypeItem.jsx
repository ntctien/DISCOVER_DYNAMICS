const TourTypeItem = ({ title, icon }) => {
  return (
    <div className="w-1/5 aspect-[5/6] item-container flex-none">
      <img src={icon} alt="Tour type" />
      <p className="font-semibold text-32 mt-[23px]">{title}</p>
    </div>
  );
};

export default TourTypeItem;
