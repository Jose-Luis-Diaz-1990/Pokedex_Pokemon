//Desde aquí la vista de lista.

const AloneCard$$ = document.querySelector('.ContainerMain');
const UrlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';


async function PokedexList(PokemonListPag) { //El parametro lo traigo de la llamada a la api que es el json con los datos.
 
    AloneCard$$.innerHTML=''; //Borro todo lo anterior al principio de cada función 
    document.querySelector('.None').style.display = 'inline';  //Pongo en display none Los botones de paginación
    const PokemonData = await PokemonListPag.results; //Extraigo los pokemon según su limite de paginación
  
for (const Pokemon of PokemonData) {

    const Id = Pokemon.url.split('/').slice(-2).join('');//Saco el id de la url

    const Name = Pokemon.name.toUpperCase();

    const Card$$ = document.createElement("div"); //Creo la carta
    const Name$$ = document.createElement("h3");
    const NPokemon$$ = document.createElement("p");
    const PokemonImg$$ = document.createElement("img");

    Name$$.textContent = Name;
    PokemonImg$$.src = UrlImg + Id + '.png';
    NPokemon$$.textContent = 'Pokemon Nº: '+ Id;
    Card$$.className = 'CardClass';
    PokemonImg$$.className = 'ImgCustom';
    
    AloneCard$$.appendChild(Card$$);
    Card$$.appendChild(Name$$);
    Card$$.appendChild(NPokemon$$);
    Card$$.appendChild(PokemonImg$$);
   
    Card$$.addEventListener('click', () => PokemonDetail (Id,Name));//Envío como parametros el id y el nombre para usarlos en la vista detalle
    PokemonImg$$.addEventListener('error', () => PokemonImg$$.src = './Img/logo.png');// Sustituye imagen con error por logo pokemon. 

    }
};


//Aquí Empieza la vista en detalle 

async function PokemonDetail(Id, Name) {

    AloneCard$$.innerHTML=''; //Borro todo lo anterior al principio de cada función 
    document.querySelector('.None').style.display = 'none';//Pongo en display none Los botones de paginación

    const CallPokedex = await fetch ('https://pokeapi.co/api/v2/pokemon/' + Id + '/');//Hago la llamada a la api para el pokemon que se clicka
    const PokemonList = await CallPokedex.json();
    const PokemonType = PokemonList.types;
    let AllTypes = [];
    
    for (const Poketype of PokemonType) {
        
        AllTypes.push(Poketype.type.name);//Pusheo al array AllType para tener el detalle del tipo, envio todos los typos asociados pero luego sólo uso el primero, hay posibilidad de ir al detalle.

    };

    const Card$$ = document.createElement('div'); //Creo la carta
    const Name$$ = document.createElement('h3');
    const NPokemon$$ = document.createElement('p');
    const PokemonImg$$ = document.createElement('img');
    const Type$$ = document.createElement('p');

    Name$$.textContent = Name;
    PokemonImg$$.src = UrlImg + Id + '.png';
    NPokemon$$.textContent = 'Pokemon Nº: '+ Id;
    Card$$.className = 'CardClass';
    PokemonImg$$.className = 'ImgCustom';
    Type$$.textContent = 'Pokemon tipo: ' + AllTypes[0].toUpperCase();

    
    AloneCard$$.appendChild(Card$$);
    Card$$.appendChild(Name$$);
    Card$$.appendChild(NPokemon$$);
    Card$$.appendChild(PokemonImg$$);
    Card$$.appendChild(Type$$);

    AllTypes.slice(0);  //Borro el array
    
};

export { PokedexList, PokemonDetail};

