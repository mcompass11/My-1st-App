let pokemonList = [
    { 
      name:"Charizard", 
      height: 1.7, 
      types: ["fire", "flying"]
      },
    { 
      name:"Dragonite",
      height: 2.2,
      types: ["dragon", "flying"]
      },
    {
      name:"Mewtwo",
      height: 2,
      types: "psychic"
      }
  ];

  //The "for" code below, allows for my array of pokemon to be looped through
  for( let i=0; i < pokemonList.length; i++) {

    //The if/else statement below sets the result to be displayed on the index page
    if (pokemonList[i].height > 2) {
    document.write("<p>" + pokemonList[i].name + " " + "(height: " +pokemonList[i].height + ") - Wow, that's big!</p>")
  }else {
    document.write("<p>" + pokemonList[i].name + " " + "(height: " +pokemonList[i].height + ")</p>")
    }
  };