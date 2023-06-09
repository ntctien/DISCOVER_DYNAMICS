import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchDestinations from "../api/services/fetchDestinations";

const useDestination = (handleDestinations) => {
  const dispatch = useDispatch();
  const { destinations } = useSelector((state) => state.destinations);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (destinations.length > 0) handleDestinations();
    else {
      const fetchData = async () => {
        setLoading(true);
        await fetchDestinations(dispatch);
        setLoading(false);
      };
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinations]);

  return { destinations, loading };
};

export default useDestination;
