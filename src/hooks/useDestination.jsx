import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchDestinations from "../api/services/fetchDestinations";

const useDestination = (handleDestinations) => {
  const dispatch = useDispatch();
  const { destinations } = useSelector((state) => state.destinations);

  useEffect(() => {
    if (destinations.length > 0) handleDestinations();
    else fetchDestinations(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinations]);

  return { destinations };
};

export default useDestination;
