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

//forEach function used to loop through pokemon array
pokemonList.forEach(function(property) {
  //The if/else statement below sets the result to be displayed on the index page
  if (property.height > 2) {
    document.write("<p>" + property.name + " (height: " + property.height +
  ") - Wow, that's big!</p>");
  }else {
  document.write("<p>" + property.name + " (height: " + property.height +
  ")</p>")}
});