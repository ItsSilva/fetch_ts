export const getHarryData = async () => {
    try{
        const data = await fetch('https://hp-api.onrender.com/api/characters').then((response) => response.json());
        // console.log(data);
        return data;
    } catch (error) {
        console.log('Error fetching data: ', error);
    };
};