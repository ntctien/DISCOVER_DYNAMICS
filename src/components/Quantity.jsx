import { minusIcon, plusIcon } from "../assets/quantity_icons";

const Quantity = ({ value = 1, setValue, min = 1, max = 100, className }) => {
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > max || value < min) return;
    setValue(value);
  };

  const handleIncrease = () => {
    if (value < max) setValue((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (value > min) setValue((prev) => prev - 1);
  };

  return (
    <div
      className={`bg-[#F6F7F8] rounded-5 grid grid-cols-3 w-[114px] h-[45px] overflow-hidden ${className}`}
    >
      <button onClick={handleDecrease} className="quantity-btn">
        <img src={minusIcon} alt="Minus" />
      </button>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        className="bg-transparent text-center text-18 focus:outline-none"
      />
      <button onClick={handleIncrease} className="quantity-btn">
        <img src={plusIcon} alt="Plus" />
      </button>
    </div>
  );
};

export default Quantity;
