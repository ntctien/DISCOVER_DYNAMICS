import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../components/Title";
import ImageSlider from "../components/tour/ImageSlider";
import getDestinationById from "../api/services/getDestinationById";
import { locationIcon, durationIcon, expenseIcon } from "../assets/tour_icons";
import getDividedLines from "../utils/getDividedLines";
import numberWithDots from "../utils/numberWithDots";
import getDurationString from "../utils/getDurationString";
import { ModalContext } from "../contexts/ModalContext";

const TourDetail = () => {
  const navigate = useNavigate();
  const { destinationId } = useParams();
  const { setCurrentModal } = useContext(ModalContext);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const destination = await getDestinationById(destinationId);
      setData(destination);
    };
    fetchData();
  }, [destinationId]);

  const handleBookTour = () => {
    if (auth.currentUser) {
      navigate(`/book-tour/${destinationId}`);
    } else {
      setCurrentModal("sign-in");
    }
  };

  return (
    <div className="pt-[10px] pb-[30px] px-[80px]">
      <div className="flex gap-x-5">
        {/* Left side */}
        <div className="w-[65.625%]">
          {/* Image slider */}
          <ImageSlider images={data?.tourImages} />
        </div>
        {/* Right side */}
        <div className="bg-white w-[34.375%] flex flex-col items-center justify-center">
          {/* Tour info */}
          <div className="w-full flex flex-col gap-y-[55px] mt-[9%]">
            <div className="tour-info">
              <div className="tour-info-img-container">
                <img src={locationIcon} alt="Location" />
              </div>
              <p>{data?.location}</p>
            </div>
            <div className="tour-info">
              <div className="tour-info-img-container">
                <img src={durationIcon} alt="Duration" />
              </div>
              <p>{getDurationString(data?.dayDuration, data?.nightDuration)}</p>
            </div>
            <div className="tour-info">
              <div className="tour-info-img-container">
                <img src={expenseIcon} alt="Expense" />
              </div>
              <p>
                {data?.price != null && numberWithDots(data?.price) + " VNĐ"}
              </p>
            </div>
          </div>
          {/* Type tags */}
          <div className="flex flex-wrap gap-[10px] ml-[8.57%] mr-[3.8%] mt-[58px]">
            {data?.type?.map((type, i) => (
              <div
                key={i}
                className="px-[11px] py-2 bg-grey rounded-5 font-medium text-20 text-[#7B7B7B]"
              >
                {type}
              </div>
            ))}
          </div>
          {/* Book button */}
          <button
            onClick={handleBookTour}
            className="w-[200px] default-btn mt-[60px] mb-[40px]"
          >
            ĐẶT TOUR
          </button>
        </div>
      </div>
      <div className="w-[65.625%]">
        {/* Description */}
        <Title
          text={"Chương trình tour"}
          className={"w-fit mx-auto mt-[13px] mb-[15px]"}
        />
        {/* Long description */}
        {data?.longDescription != null &&
          getDividedLines(data?.longDescription)}
        {/* Schedule */}
        {data?.schedule?.map((day, i) => (
          <div key={i}>
            <h3 className="font-bold">{`Ngày ${day.day}: ${day.title}`}</h3>
            {day.body != null && getDividedLines(day.body)}
          </div>
        ))}
        {/* Notes */}
        {data?.note?.map((item, i) => (
          <Fragment key={i}>
            <br />
            <h4 className="font-semibold italic">{item.title}</h4>
            {item.body != null && getDividedLines(item.body, "font-light")}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default TourDetail;
