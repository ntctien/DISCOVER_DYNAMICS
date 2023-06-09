import { createSearchParams, useNavigate } from "react-router-dom";

const useNavigateToDestinationWithParams = () => {
  const navigate = useNavigate();

  const navigateToDestinationWithParams = (params) => {
    for (const param in params) {
      if (!params[param]) delete params[param];
    }
    navigate({
      pathname: "/destination",
      search: createSearchParams(params).toString(),
    });
  }; 

  return navigateToDestinationWithParams;
};

export default useNavigateToDestinationWithParams;
