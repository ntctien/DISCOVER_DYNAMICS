import { minusIcon, plusIcon } from "../assets/quantity_icons";

const Quantity = ({ className }) => {
  return (
    <div
      className={`bg-[#F6F7F8] rounded-5 grid grid-cols-3 w-[114px] h-[45px] ${className}`}
    >
      <button className="quantity-btn">
        <img src={minusIcon} alt="Minus" />
      </button>
      <input defaultValue={1} className="bg-transparent text-center text-18 focus:outline-none" />
      <button className="quantity-btn">
        <img src={plusIcon} alt="Plus" />
      </button>
    </div>
  );
};

export default Quantity;
