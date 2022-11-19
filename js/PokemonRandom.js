import { PokemonList } from "./call-to-api.js";

//Aparitr de aquí hago el ramdom de los pokemon
//PokemonData es la variable para buscar dentro del array
//Como uso el primer fecth necesito traer todos los pokemon para que funcione el buscador.

const PokemonData = await PokemonList.results;          
const AloneCard$$ = document.querySelector('.ContainerMain');
const UrlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

function Random(){
  
    AloneCard$$.innerHTML = ''; //Borro todo lo anterior al principio de cada función 
    document.querySelector('.None').style.display = 'none'; //Pongo en display none Los botones de paginación
    let RandomNumber = Math.ceil(Math.random() * 1154); //Creo un numero al azar con el limite de posibles pokemon
    let RandomIndex = RandomNumber - 1;   
    let IndexName = PokemonData[RandomIndex];

    const Card$$ = document.createElement('div');  //Creo la carta
    const Name$$ = document.createElement("h3");
    const NPokemon$$ = document.createElement("p");
    const PokemonImg$$ = document.createElement("img");

    Name$$.textContent = IndexName.name.toUpperCase();
    PokemonImg$$.src = UrlImg + RandomNumber + '.png';
    NPokemon$$.textContent = 'Pokemon Nº: ' + RandomNumber;
    Card$$.className = 'CardClass';
    PokemonImg$$.className = 'ImgCustom';

          
    AloneCard$$.appendChild(Card$$);
    Card$$.appendChild(Name$$);
    Card$$.appendChild(NPokemon$$);
    Card$$.appendChild(PokemonImg$$);

    PokemonImg$$.addEventListener('error', () => PokemonImg$$.src = './Img/logo.png');     // Sustituye imagen con error por logo pokemon.  
};

export {Random};