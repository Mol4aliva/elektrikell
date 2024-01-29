const apiUrl = 'https://dashboard.elering.ee/api';
export const getPriceData = async () => {
    const from = '2024-01-28T20:59:59.999Z';
    const until = '2024-01-30T20:59:59.999Z';

    const data = new URLSearchParams ({
        start: from,
        end: until,
    });

    const response = await fetch(`${apiUrl}/nps/price?${data}`);

    return await response.json();
};