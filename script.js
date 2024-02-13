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

// hittaPokeBtn.setAttribute("class" , "active");
förstaSidan.setAttribute("class", "none");
andraSidan.setAttribute("class", "none");
mittLagBtn.classList.contains("active") ? hittaPokeBtn.classList.add("hitta-poke") : hittaPokeBtn.classList.add("active");


hittaPokeBtn.addEventListener("click", () => {
    hittaPokeBtn.classList.add("active");
    mittLagBtn.classList.remove("active");
    förstaSidan.style.display = "block";
    andraSidan.style.display = "none";
});

mittLagBtn.addEventListener("click", () => {
    mittLagBtn.classList.add("active");
    hittaPokeBtn.classList.remove("active");
    förstaSidan.style.display = "none";
    andraSidan.style.display = "block";
    lagSpelare();
});


// Här hämtar vi svar från API
const query = "a"
const getPokemonData = async (query) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const response = await fetch(url);
    if (response.status !== 200) {
        let errorMeddelande = document.createElement("p");
        errorMeddelande.innerHTML =
            "Ett problem har uppstått, kontrollera att du är uppkopplad mot internet. Testa igen senare.";
        errorMeddelande.setAttribute("id", "error-meddelande");
        felMeddelande.append(errorMeddelande);
        searchInput.addEventListener(
            "keydown",
            (e) => {
                errorMeddelande.remove();
            },
            { once: true }
        );

        // Hantera fel här om det uppstår ett problem med att hämta data från API:et
        return;
    }

    const data = await response.json();
    const matchingPokemon = data.results.filter((pokemon) => {
        const name = pokemon.name.toLowerCase();

        return name.includes(query.toLowerCase());
    });
    console.log(matchingPokemon);
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
getPokemonData(query);
