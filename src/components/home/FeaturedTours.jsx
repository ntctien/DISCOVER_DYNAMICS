import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import ToursContainer from "../ToursContainer";
import fetchDestinations from "../../api/services/fetchDestinations";

const FeaturedTours = () => {
  const dispatch = useDispatch();
  const { destinations } = useSelector((state) => state.destinations);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await getDocs(collection(db, "featuredTour")).then((querySnapshot) => {
      const idList = querySnapshot.docs.map((doc) => doc.id);
      setData(
        destinations.filter((destination) => idList.includes(destination.id))
      );
    });
  };

  useEffect(() => {
    if (destinations.length > 0) {
      fetchData();
    } else fetchDestinations(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinations]);

  return <ToursContainer tours={data} className={"mt-[37px]"} />;
};

export default FeaturedTours;
