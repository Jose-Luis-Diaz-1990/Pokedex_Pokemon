import { Random } from "./PokemonRandom.js";
import { Searching } from "./PokemonSearch.js";
import { Call,Less, More } from "./Call-to-api-pag.js";

document.querySelector('#PokedexList').addEventListener('click', Call);//lanza la paginación y la lista
document.querySelector('#PokedexRamdom').addEventListener("click", Random);//El random
document.querySelector('.FormSearch').addEventListener("submit", Searching);//Buscador
document.querySelector('#ViewLess').addEventListener("click", Less);//Lanza la función menos 150 al limit de paginancion
document.querySelector('#ViewMore').addEventListener("click", More);//Lanza la función más 150 al limit de paginancion



