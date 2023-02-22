let hittaPokeBtn = document.querySelector("#hitta-pokemon");
let mittLagBtn = document.querySelector("#mitt-lag");
let förstaSidan = document.querySelector("#sida-1");
let andraSidan = document.querySelector("#sida-2");
let searchInput = document.querySelector("#sök-pokemon");
let inputDiv = document.querySelector(".input-div");
let felMeddelande = document.querySelector("#fel-meddelande");
let pokemonWrapper = document.querySelector(".wrapper");
let pokemonWrapper2 = document.querySelector(".wrapper2");

// Delar upp sections.
förstaSidan.style.display = "block";
andraSidan.style.display = "none";

hittaPokeBtn.addEventListener("click", () => {
  förstaSidan.style.display = "block";
  andraSidan.style.display = "none";
});

mittLagBtn.addEventListener("click", () => {
  förstaSidan.style.display = "none";
  andraSidan.style.display = "block";
});

const displayPokemon = async (pokemon) => {
  // Visa informationen om den matchande Pokemon på webbsidan

  let pokemonPlace = document.createElement("div");
  let pokeImg = document.createElement("img");
  let pokeName = document.createElement("h2");
  let läggTill = document.createElement("button");

  pokemonPlace.setAttribute("class", "pokemon-container");
  pokeImg.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
  pokeImg.setAttribute("class", "figur");
  läggTill.setAttribute("class", "lägg-till-pokebtn");

  läggTill.innerText = "Lägg till Pokemon";
  pokeName.innerHTML = pokemon.name;

  pokemonPlace.append(pokeImg);
  pokemonPlace.append(pokeName);
  pokemonPlace.append(läggTill);
  pokemonWrapper.append(pokemonPlace);


  // Här försöker jag att räkna hur många spelare en har i laget.
  let antalSpelare = document.querySelector(".antal-spelare");
  let spelareCounter = document.querySelectorAll( ".wrapper2 .pokemon-container").length;
  let spelarPlus = spelareCounter++

  if (spelarPlus < 3) {
    antalSpelare.innerText = `du har ${spelareCounter} spelare`;
    pokemonWrapper2.append(antalSpelare);
  }

  läggTill.addEventListener("click",() => {
      const pokemonPlaceCopy = pokemonPlace.cloneNode(true);
      pokemonPlaceCopy.removeChild(
        pokemonPlaceCopy.querySelector(".lägg-till-pokebtn")
      );

      const changeName = document.createElement("button");
      changeName.innerText = "Byt namn";
      changeName.addEventListener("click", (e) => {
        const name = pokemonPlaceCopy.querySelector("h2");
        const input = document.createElement("input");
        pokemonPlaceCopy.replaceChild(input, name);

        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            const newName = input.value;
            const newH2 = document.createElement("h2");
            newH2.innerText = newName;
            pokemonPlaceCopy.replaceChild(newH2, input);
          }
        });

        e.target.remove();
      });

      pokemonPlaceCopy.append(changeName);

      pokemonWrapper2.append(pokemonPlaceCopy);
    },
    { once: true }
  );
};

const getPokemonData = async (query) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  const response = await fetch(url);
  if (response.status !== 200) {
    // Hantera fel här om det uppstår ett problem med att hämta data från API:et
    return;
  }
  const data = await response.json();
  const matchingPokemon = data.results.filter((pokemon) => {
    const name = pokemon.name.toLowerCase();
    return name.includes(query.toLowerCase());
  });
  if (matchingPokemon.length === 0) {
    // Hantera när ingen matchande Pokemon hittades
    let pokeError = document.createElement("p");
    pokeError.innerText = `Kunde inte hitta pokemon ${query}`;
    pokeError.setAttribute("id", "error-meddelande");
    felMeddelande.append(pokeError);
    searchInput.addEventListener(
      "keydown",
      (e) => {
        pokeError.remove();
      },
      { once: true }
    );
    return;
  }
  // Visa bara den första matchande Pokemon

  pokemonWrapper.innerHTML = "";
  matchingPokemon.forEach(async (p) => {
    console.log(p.url);
    let response = await fetch(p.url);
    if (response.status !== 200) {
      return;
    }

    response.json().then((p) => {
      displayPokemon(p);
    });
  });
};

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value;
    if (query.trim() !== "") {
      getPokemonData(query);
    }
  }
});
