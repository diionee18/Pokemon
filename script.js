import { displayPokemon } from "./skapapoke.js";
import { lagSpelare } from "./lag.js";

let hittaPokeBtn = document.querySelector("#hitta-pokemon");
let mittLagBtn = document.querySelector("#mitt-lag");
let förstaSidan = document.querySelector("#sida-1");
let andraSidan = document.querySelector("#sida-2");
let searchInput = document.querySelector("#sök-pokemon");
let felMeddelande = document.querySelector("#fel-meddelande");
let pokemonWrapper = document.querySelector(".wrapper");





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
  lagSpelare()
});




// Här hämtar vi svar från API
const getPokemonData = async (query) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  const response = await fetch(url);
  if (response.status !== 200) {
    // Hantera fel här om det uppstår ett problem med att hämta data från API:et
    return;
  }
  
  const data = await response.json();
  allPokemons = data.results;
  console.log(allPokemons);
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

  // Visa de matchande Pokemon
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
