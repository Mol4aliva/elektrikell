export default function chartTopPrice(priceCurrent) {
   return priceCurrent.map(data => ({
      ...data,
      price: data.price,
   }));
}

