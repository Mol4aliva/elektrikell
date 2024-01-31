import {lodash} from "lodash/seq";
import { VAT, COUNTRY_CODES} from "../../constants";

export const mwToKw = price => lodash.round(parseFloat(price) / 10, 2);

export const addTax = (amount, countryCode) =>
    lodash.round(amount * (VAT[COUNTRY_CODES[countryCode]] / 100 +1), 2);