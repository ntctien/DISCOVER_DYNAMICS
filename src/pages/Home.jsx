import SearchBar from "../components/search_bar/SearchBar";
import banner from "../assets/banner.jpg";
import Title from "../components/Title";
import FeaturedTours from "../components/home/FeaturedTours";
import Destination from "../components/home/DestinationContainer";
import TourType from "../components/home/TourType";

const Home = () => {
  return (
    <div>
      <div className="bg-white pb-[60px]">
        {/* Banner */}
        <div className="relative px-[40px] w-full z-10">
          <img src={banner} alt="Banner" />
          <div className="absolute bottom-[49px] right-[85px] text-right">
            <h2 className="font-semibold text-40 text-white">
              Trải nghiệm các tour mạo hiểm cùng
            </h2>
            <h1 className="font-bold text-[64px] leading-[78px] text-white">
              Discover Dynamics
            </h1>
            <button className="p-[18px] bg-orange rounded-5 font-semibold text-black mt-[34px]">
              Khám phá ngay
            </button>
          </div>
        </div>
        {/* Search bar */}
        <SearchBar />
      </div>
      <div className="pt-5 pb-32 px-[80px] w-full center-col">
        {/* Description */}
        <Title text={"Giới thiệu"} />
        <p className="mt-[11px]">
          Chào mừng đến với trang web du lịch mạo hiểm của Discover Dynamics!
          Chúng tôi là một đội ngũ chuyên nghiệp và đam mê về du lịch mạo hiểm,
          luôn sẵn sàng đưa bạn đến những điểm đến kích thích nhất trên khắp
          Việt Nam.
          <br /><br />
          Trên trang web của chúng tôi, bạn có thể tìm thấy những hành trình
          phiêu lưu đầy thử thách, từ leo núi, đi bộ đường dài, lặn biển đến
          những hoạt động địa hình khắc nghiệt. Chúng tôi cam kết mang đến cho
          bạn những trải nghiệm tuyệt vời nhất với những chuyến đi được tùy
          chỉnh cho từng nhóm và đáp ứng tối đa nhu cầu và mong muốn của bạn.
          <br /><br />
          Bên cạnh đó, trang web của chúng tôi cũng cung cấp thông tin hữu ích
          về những địa điểm du lịch mạo hiểm, các hoạt động thú vị, các hướng
          dẫn viên và nhà cung cấp dịch vụ uy tín để giúp bạn có một kỳ nghỉ
          hoàn hảo. <br /><br />
          Hãy cùng chúng tôi khám phá và trải nghiệm những điều tuyệt vời nhất
          trong cuộc đời!
        </p>
        {/* Tour */}
        <Title text={"Các tour nổi bật"} className={"mt-[68px]"} />
        <p className="text-description mt-[9px]">
          Cùng Discover Dynamics điểm qua một vài điểm đến thú vị các bạn nhé!
        </p>
        <FeaturedTours />
        {/* Destination */}
        <Title text={"Điểm đến"} className={"mt-[86px]"} />
        <Destination />
        {/* Tour types */}
        <Title text={"Loại hình tour"} className={"mt-[86px]"} />
        <p className="text-description mt-[9px]">
          Một trải nghiệm tuyệt vời cùng Discover Dynamics với các loại hình sau
          đây
        </p>
        <TourType />
      </div>
    </div>
  );
};

export default Home;
