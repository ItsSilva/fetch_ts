export const getPokeData = async () => {
    try{
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/1').then((response) => response.json());
        // console.log(data);
        return data;
    } catch (error) {
        console.log('Error fetching data: ', error);
    };
};