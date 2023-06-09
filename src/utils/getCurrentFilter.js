const filterTypes = ["search", "min", "max", "sort", "region", "type"];

const getCurrentFilter = (location) => {
  const params = new URLSearchParams(location.search);

  return filterTypes
    .map(type => {
      return {
        [type]: params.get(type),
      };
    })
    .reduce((accumulator, currentValue) => {
      return Object.assign(accumulator, currentValue);
    }, {});
};

export default getCurrentFilter;
