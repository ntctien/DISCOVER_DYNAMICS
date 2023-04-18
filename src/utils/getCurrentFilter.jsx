const filterTypes = ["search", "min", "max"];

const getCurrentFilter = (location) => {
  const params = new URLSearchParams(location.search);

  return filterTypes
    .map((type, i) => {
      return {
        [type]: params.get(type),
      };
    })
    .reduce((accumulator, currentValue) => {
      return Object.assign(accumulator, currentValue);
    }, {});
};

export default getCurrentFilter;
