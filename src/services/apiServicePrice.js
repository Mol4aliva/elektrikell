const apiUrl = 'https://dashboard.elering.ee/api/nps/price/EE/current';
export const getPriceCurrent = async () => {
    const response = await fetch(`${apiUrl}`);

    return await response.json();
};