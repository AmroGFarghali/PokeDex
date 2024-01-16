const pokemon_image = document.querySelectorAll(".pokemon-artwork img");
pokemon_image.forEach((image) => {
  image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`;
});

const max_pokemon = 151;
const pokemonList = document.querySelector(".pokemon-list");
const fetchAllPokemon = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${max_pokemon}`
  );
  const allPokemon = await response.json();
  displayAllPokemon(allPokemon.results);
};

const displayAllPokemon = (pokemons) => {
  pokemonList.innerHTML = "";

  pokemons.forEach((pokemon) => {
    const pokemonID = pokemon.url.split("/")[6];

    const pokeCard = document.createElement("div");
    pokeCard.className = "pokemon-card";
    pokeCard.innerHTML = ` 
    <p class="poke-id"> 1</p> 
    <picture
     class="pokemon-artwork">  <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg" alt="${pokemon.name}" />
     </div>
    </picture>
    <p class="pokemon-name">${pokemon.name}</p>`;
    pokemonList.appendChild(pokeCard);
  });
};
// run code
fetchAllPokemon();
