import SearchBar from "../components/SearchBar";
import banner from "../assets/banner.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Banner */}
      <div className="relative">
        <img src={banner} alt="Banner" />
        <div className="absolute bottom-[49px] right-[85px] text-right">
          <h2 className="font-semibold text-[40px] leading-[49px] text-white">
            Trải nghiệm các tour mạo hiểm cùng
          </h2>
          <h1 className="font-bold text-[64px] leading-[78px] text-white">
            Discover Dynamics
          </h1>
          <button className="p-[18px] bg-orange rounded-5 font-semibold text-20 text-black mt-[34px]">
            Khám phá ngay
          </button>
        </div>
      </div>
      {/* Search bar */}
      <SearchBar />
    </div>
  );
};

export default Home;
