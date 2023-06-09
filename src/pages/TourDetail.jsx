import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../components/Title";
import ImageSlider from "../components/tour/ImageSlider";
import getDestinationById from "../api/services/getDestinationById";
import { locationIcon, durationIcon, expenseIcon } from "../assets/tour_icons";
import getDividedLines from "../utils/getDividedLines";
import numberWithDots from "../utils/numberWithDots";
import getDurationString from "../utils/getDurationString";
import { Spin } from "antd";
import useBookTour from "../hooks/useBookTour";

const TourDetail = () => {
  const { destinationId } = useParams();
  const handleBookTour = useBookTour();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const destination = await getDestinationById(destinationId);
      setLoading(false);
      setData(destination);
    };
    fetchData();
  }, [destinationId]);

  return (
    <div className="pt-[10px] pb-[30px] px-[80px]">
      <Spin spinning={loading}>
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
                <p>
                  {getDurationString(data?.dayDuration, data?.nightDuration)}
                </p>
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
            <div className="flex flex-wrap gap-[10px] ml-[8.57%] mr-[3.8%] mt-[58px] self-start">
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
              onClick={() => handleBookTour(destinationId)}
              className="w-[200px] default-btn mt-[60px] mb-[40px]"
            >
              ĐẶT TOUR
            </button>
          </div>
        </div>
      </Spin>
      <div className="w-[65.625%]">
        {/* Description */}
        <Title
          text={"Chương trình tour"}
          className={"w-fit mx-auto mt-[30px] mb-[15px]"}
        />
        {!loading ? (
          <>
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
          </>
        ) : (
          <div className="w-full flex items-center justify-center">
            <Spin className="mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TourDetail;
