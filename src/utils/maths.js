import lodash from "lodash";
export  const getAveragePrice = (data) =>
    lodash.round(data.reduce((acc, { price }) => acc + price, 0) / data.length);