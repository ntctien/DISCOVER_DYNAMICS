import { createSearchParams } from "react-router-dom";

const navigateToDestinationWithParams = (params, navigate) => {
    for (const param in params) {
        if (!params[param]) delete params[param];
    }
    navigate({
        pathname: "/destination",
        search: createSearchParams(params).toString(),
    });
}

export default navigateToDestinationWithParams;