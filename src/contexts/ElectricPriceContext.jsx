import {createContext, useState} from "react";

const ElectricPriceContext = createContext(null);

function ElectricPriceProvider({children}) {
    const [averagePrice, setAveragePrice] = useState(0);

    const value = {
        values: {
            averagePrice,
        },
        actions: {
            setAveragePrice,
        },
    };
    return (
        <ElectricPriceContext.Provider value={value}>
            {children}
        </ElectricPriceContext.Provider>
    );
}
export { ElectricPriceContext, ElectricPriceProvider };
export default ElectricPriceProvider;