import lodash from "lodash";
import { VAT, COUNTRY_CODES } from "./constants";

// export const mwToKw = (price) => lodash.round(parseFloat(price) / 10, 2).toFixed(2);
export const mwToKw = (price) => {
    const result = lodash.round(parseFloat(price) / 10, 2).toFixed(2);
    return result;
};
// export const addTax = (amount, countryCode) =>
//     lodash.round(amount * (VAT[COUNTRY_CODES[countryCode]] / 100 + 1), 2).toFixed(2);

export const addTax = (amount, countryCode) => {
    const taxAmount = lodash.round(amount * (VAT[COUNTRY_CODES[countryCode]] / 100 + 1), 2);
    return taxAmount.toFixed(2);
};
