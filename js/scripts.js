let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    pokemonList.push(item);
  }
//allows the addition of pokemon to list

  function addListItem (pokemon) {
    let pokemonList = document.querySelector(".pokemon-List");
    let listpokemon = document.createElement("li");
    //created list of pokemon to be displayed
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button_primary");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
      //Create a button for each pokemon, once clicked displays pokemon info in console
    })
    }

  function showDetails (pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsURL: item.url
        };
        //loaded pokemon api
        add(pokemon);
        console.log(pokemon);
        //adds the pokemon from the results to pokemonList
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      //details of pokemon to be shown
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    loadList: loadList,
    getAll: getAll,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
  //data is now loaded up
  pokemonRepository.getAll().forEach( function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});