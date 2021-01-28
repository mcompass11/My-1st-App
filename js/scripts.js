let pokemonRepository = (function () {
  let modalContainer = document.querySelector("#modal-container");
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    pokemonList.push(item);
  }//allows the addition of pokemon to list

  function addListItem (pokemon) {
    let pokemonList = document.querySelector(".pokemon-List");
    let catalog = document.createElement("li");
    //created list of pokemon to be displayed
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button_primary");
    catalog.appendChild(button);
    pokemonList.appendChild(catalog);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
      //Create a button for each pokemon, once clicked displays pokemon info in console
    });
    }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
       //loaded up pokemon from external source

        add(pokemon);
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
      item.image = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
     //details of pokemon to be shown
    }).catch(function (e) {
      console.error(e);
    });
  }
  function showModal(title, image, text) {
    modalContainer.classList.add("is-visible");

  function hideModal() {
    modalContainer.classList.remove("is-visible");
  }

  modalContainer.innerHTML = ""; // clears existing modal content

  let modal = document.createElement("div");
  modal.classList.add("modal");

  let closeButtonElement = document.createElement("button");
  closeButtonElement.classList.add("modal-close");
  closeButtonElement.innerText = "Close";
  closeButtonElement.addEventListener("click", hideModal);


  let titleElement = document.createElement("h1");
  titleElement.innerText = title;

  let contentElement = document.createElement("p");
  contentElement.innerText = text;

  let imageElement = document.createElement("img");
  imageElement.src = image;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modal.appendChild(imageElement);
  modalContainer.appendChild(modal);
  
  modalContainer.classList.add("is-visible");

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });//closes modal via escape key

  modalContainer.addEventListener("click", (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  }); //closes modal when clicking overlay
  }

  function showDetails (pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon.name, pokemon.image,"Height: " + pokemon.height);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function() {
  //data is now loaded up
  pokemonRepository.getAll().forEach( function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});