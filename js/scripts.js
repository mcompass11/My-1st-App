let pokemonRepository = (function () {
  let pokemonList = [
    { 
      name: "Charizard", 
      height: 1.7, 
      types: ["fire", "flying"]
      },
    { 
      name: "Dragonite",
      height: 2.2,
      types: ["dragon", "flying"]
      },
    {
      name: "Mewtwo",
      height: 2,
      types: "psychic"
      }
  ];

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    pokemonList.push(item);
  }

  function addListItem (pokemon) {
    let pokemonList = document.querySelector(".pokemon-List");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button_primary");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    })
    }

  function showDetails (pokemon) {
    console.log(pokemon);
  }


  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach( function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});