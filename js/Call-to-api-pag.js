import { PokedexList } from "./PokemonList.js";
//Desde qui el manejo de la paginación y lanzo la funcion que pinta la lista
let limit = 150;  //Parto del limit 150
//Sumo 150 al limite siempre que sea menor o igual que el total de los pokemon, reacciona al click en el boton ver más
function More() {  //Sumo 150 al limite 
    if(limit <= 1154 ){
    limit += 150;
    Call();
    };
};
//Resto 150 al limite siempre que sea mayor que el 150, que es minimo que quiero mostrar, reacciona al click en el boton ver menos
function Less() {
    if(limit > 150){
    limit -= 150;
    Call();
    }; 
};
//Hago la llamada cambiando el limit de la url y lanzo la vista de lista.
async function Call() {
   
    let Call = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`;
    let CallPokedex = await fetch (Call);
    const PokemonListPag = await CallPokedex.json();
    PokedexList(PokemonListPag);
}; 
//Hasta aquí llamada la API y convierto a json.
export {Call, More, Less};

