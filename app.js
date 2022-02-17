const pokemonDataContainer = document.getElementById("list_data_container");
const cardContainer = document.getElementsByClassName("front-front");
let audio = document.getElementById("pokeaudio");

const playAudio = () => {
  audio.play();
};

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

const printDataPokemonsName = async (data) => {
  let pokemonesContainer = "";

  for (const element of data) {
    pokemonesContainer += `
     <h1 class="list_item" id=${element.name} >${element.name}</h1>
     `;
  }

  pokemonDataContainer.innerHTML = pokemonesContainer;
  let select = "";
  const listItem = document.querySelectorAll(".list_item");

  listItem.forEach((item) => {
    item.addEventListener("click", () => {
      select = item;
      item.classList.add("selected");
      playAudio();
      listItem.forEach((item) => {
        if (select !== item) {
          item.classList.remove("selected");
        }
      });

      getPokemonDetails(item.textContent);
    });
  });
};

const getPokemonDetails = async (pokeName) => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

    const response = await data.json();
    console.log(response);
    console.log(response.sprites.other.dream_world.front_default);
    printCardContainer(response.sprites.other.dream_world.front_default);
  } catch (error) {
    console.log(error);
  }
};

const printCardContainer = (data) => {
  cardContainer[0].style.background = `url(${data}) no-repeat center center/cover white`;
  console.log(cardContainer);
};

//Commit
