import moment from "moment";
import { mwToKw } from "./priceFormats";
export default function chartDataConvertor(priceData) {
 return priceData.map(data => ({
    ...data,
    price: mwToKw(data.price),
    hour: moment.unix(data.timestamp).format("HH"),
}));
}