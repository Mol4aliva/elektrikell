import {createContext, useState} from "react";

const ElectricPriceContext = createContext(null);

function ElectricPriceProvider({children}) {
    const [averagePrice, setAveragePrice] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);

    const value = {
        values: {
            averagePrice,
            currentPrice,
        },
        actions: {
            setAveragePrice,
            setCurrentPrice,
        },
    };
    return (
        <ElectricPriceContext.Provider value={value}>
            {children}
        </ElectricPriceContext.Provider>
    );
}
export { ElectricPriceContext };
export default ElectricPriceProvider;