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
  return {
    getAll: getAll,
    add: add
  };
})();

console.log(pokemonRepository.getAll());
//
pokemonRepository.getAll().forEach(function (pokemon) {
  if (pokemon.height > 2) {
    document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") - Wow, that's big!</p>");
  }else {
    document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ")</p>")}
  });