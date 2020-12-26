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
  
  for(i=0; i < pokemonList.length; i++){
    document.write("<p>" + pokemonList[i].name + " " + "(height: " +pokemonList[i].height + ")</p>")
  };