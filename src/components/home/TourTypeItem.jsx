const TourTypeItem = ({ title, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-1/5 aspect-[5/6] item-container flex-none cursor-pointer"
    >
      <img src={icon} alt="Tour type" />
      <p className="font-semibold text-32 mt-[23px]">{title}</p>
    </div>
  );
};

export default TourTypeItem;
