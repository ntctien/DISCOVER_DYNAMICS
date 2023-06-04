import { useRef } from "react";
import Slider from "react-slick";
import { prevIcon, nextIcon } from "../../assets/slider_icons";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const ImageSlider = ({ images }) => {
  const slider = useRef(null);

  return (
    <div className="relative media-slider-container">
      <div className="w-full aspect-[4/3] bg-green">
        <Slider ref={slider} {...settings}>
          {images?.map((image, i) => (
            <img
              key={i}
              src={image}
              alt="Tour"
              className="w-full aspect-[4/3] object-cover object-center"
            />
          ))}
        </Slider>
      </div>

      <button
        onClick={() => slider?.current?.slickPrev()}
        className="arrow-btn arrow-prev"
      >
        <img src={prevIcon} alt="Prev" />
      </button>
      <button
        onClick={() => slider?.current?.slickNext()}
        className="arrow-btn arrow-next"
      >
        <img src={nextIcon} alt="Next" />
      </button>
    </div>
  );
};

export default ImageSlider;
