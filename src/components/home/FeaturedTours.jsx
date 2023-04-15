import tours from '../../constants/tours';
import ToursContainer from "../ToursContainer";

const FeaturedTours = () => {
  return (
    <ToursContainer tours={tours} className={'mt-[37px]'}/>
  );
};

export default FeaturedTours;
