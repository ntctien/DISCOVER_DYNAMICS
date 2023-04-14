const DestinationItem = ({ title, icon, titleColor }) => {
  return (
    <div
      className="w-[29%] aspect-[3/4] item-container"
      style={{ filter: "drop-shadow(4px 8px 10px rgba(0, 0, 0, 0.25))" }}
    >
      <img src={icon} alt="Destination" />
      <h3
        className="font-semibold text-48 mt-[51px]"
        style={{ color: titleColor }}
      >
        {title}
      </h3>
    </div>
  );
};

export default DestinationItem;
