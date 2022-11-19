import {PokemonList } from "./call-to-api.js";

//Aquí empiezo a formar el buscador
//PokemonData es la variable para buscar dentro del array
//Como uso el primer fecth necesito traer todos los pokemon para que funcione el buscador.

const PokemonData = PokemonList.results;
const AloneCard$$ = document.querySelector('.ContainerMain');
const InputSearch$$ = document.querySelector('input');
const UrlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

async function Searching(ev){
    
    ev.preventDefault();    //Aquí evito la recarga de la página al enviar el formulario
    AloneCard$$.innerHTML='';     //Borro todo lo anterior al principio de cada función 
    document.querySelector('.None').style.display = 'none';   //Pongo en display none Los botones de paginación
    let UserValue = InputSearch$$.value.toLowerCase();    //Manejo la busqueda del usuario para que sólo sea minuscula

    for (const Pokemon of PokemonData) {

        if (UserValue.includes(Pokemon.name)) {
            
            const AloneId = Pokemon.url.split('/').slice(-2).join('');       //Saco el id de la url
            
            const Card$$ = document.createElement('div');               //Creo la carta
            const Name$$ = document.createElement("h3");
            const NPokemon$$ = document.createElement("p");
            const PokemonImg$$ = document.createElement("img");
            
            Name$$.textContent = Pokemon.name.toUpperCase();              
            PokemonImg$$.src = UrlImg + AloneId + '.png';
            NPokemon$$.textContent = 'Pokemon Nº: '+ AloneId;
            Card$$.className = 'CardClass';
            PokemonImg$$.className = 'ImgCustom';
            
            AloneCard$$.appendChild(Card$$);
            Card$$.appendChild(Name$$);
            Card$$.appendChild(NPokemon$$);
            Card$$.appendChild(PokemonImg$$);
            
            PokemonImg$$.addEventListener('error', () => PokemonImg$$.src = './Img/logo.png'); // Sustituye imagen con error por logo pokemon. 
            InputSearch$$.value = ''; //limpio el formulario en caso de encontrar el pokemon
        } 
    }
};


export {Searching};

