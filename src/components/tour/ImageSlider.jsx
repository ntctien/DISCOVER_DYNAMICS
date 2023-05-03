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

const images = [
  "https://bizweb.dktcdn.net/thumb/1024x1024/100/401/490/products/cb04.jpg?v=1673448957217",
  "https://bizweb.dktcdn.net/thumb/1024x1024/100/401/490/products/cb03.jpg?v=1673448958270",
  "https://bizweb.dktcdn.net/thumb/1024x1024/100/401/490/products/cao-bang.jpg?v=1673448961023",
  "https://bizweb.dktcdn.net/thumb/1024x1024/100/401/490/products/cb02.jpg?v=1673448961297",
];

const ImageSlider = () => {
  const slider = useRef(null);

  return (
    <div className="relative media-slider-container">
      <Slider ref={slider} className="w-full" {...settings}>
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt="Tour"
            className="w-full h-full aspect-[4/3] object-cover object-center"
          />
        ))}
      </Slider>
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
