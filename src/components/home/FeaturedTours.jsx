import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import ToursContainer from "../ToursContainer";
import useDestination from "../../hooks/useDestination";

const FeaturedTours = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await getDocs(collection(db, "featuredTour")).then((querySnapshot) => {
      const idList = querySnapshot.docs.map((doc) => doc.id);
      setData(
        destinations.filter((destination) => idList.includes(destination.id))
      );
    });
  };
  const { destinations } = useDestination(fetchData);

  return <ToursContainer tours={data} className={"mt-[37px]"} />;
};

export default FeaturedTours;
