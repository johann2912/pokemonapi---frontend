const pokemonDataContainer = document.getElementById("list_data_container");

const getAllPokemons = async () => {
  try {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=500");

    const response = await data.json();
    console.log(response);
    printDataPokemonsName(response.results);
  } catch (error) {
    console.log(error);
  }
};

getAllPokemons();

const handleGetId = (element) => {
  console.log(element);
};

const printDataPokemonsName = (data) => {
  let pokemonesContainer = "";

  for (const element of data) {
    pokemonesContainer += `
    <h1 id=${element.url} onclick="handleGetId(${element})" >${element.name}</h1>
    
    `;
  }

  pokemonDataContainer.innerHTML = pokemonesContainer;
};
