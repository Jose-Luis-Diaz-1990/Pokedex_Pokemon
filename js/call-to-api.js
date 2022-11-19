const CallPokedex = await fetch ('https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000');
const PokemonList = await CallPokedex.json();
//Hasta aquí llamada la API y convierto a json.

export {PokemonList};