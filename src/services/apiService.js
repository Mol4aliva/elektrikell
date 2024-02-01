const apiUrl = 'https://dashboard.elering.ee/api';
export const getPriceData = async (from, until) => {

    const data = new URLSearchParams({
        start: from,
        end: until,
    });

    const response = await fetch(`${apiUrl}/nps/price?${data}`);

    return await response.json();
};

export const getCurrentPrice = async () => {
    const countryCode = 'EE';

    const response = await fetch(`${apiUrl}/nps/price/${countryCode}/current`);

    return await response.json();

};
