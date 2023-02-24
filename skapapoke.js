import { lagSpelare } from "./lag.js";


let pokemonWrapper2 = document.querySelector(".wrapper2");
let pokemonWrapper = document.querySelector(".wrapper");






const displayPokemon = async (pokemon) => {
  let pokemonPlace = document.createElement("div");
  let pokeImg = document.createElement("img");
  let pokeName = document.createElement("h2");
  let läggTill = document.createElement("button");

  pokemonPlace.setAttribute("class", "pokemon-container");
  pokeImg.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
  pokeImg.setAttribute("class", "figur");
  läggTill.setAttribute("class", "lägg-till-pokebtn");

  läggTill.innerText = "Lägg till Pokémon";
  pokeName.innerHTML = pokemon.name;

  pokemonPlace.append(pokeImg);
  pokemonPlace.append(pokeName);
  pokemonPlace.append(läggTill);
  pokemonWrapper.append(pokemonPlace);


  // Här flyttar jag den Pokemon man valt att ha i sitt lag till Mitt lag samt kicka pokemon.
  let taBort = document.createElement("button");
  taBort.innerHTML = "Kicka Pokèmon";
  taBort.setAttribute("class", "ta-bort-pokemon");

  const pokemonPlaceCopy = pokemonPlace.cloneNode(true);
  pokemonPlaceCopy.removeChild(
    pokemonPlaceCopy.querySelector(".lägg-till-pokebtn")
  );

  läggTill.addEventListener("click", () => {
    pokemonPlaceCopy.append(taBort);
    pokemonWrapper2.append(pokemonPlaceCopy);
    pokemonPlaceCopy.appendChild(changeName);
     });

  // Här kickar vi spelaren
  taBort.addEventListener("click", (e) => {
    pokemonPlaceCopy.remove();
    lagSpelare()
    });
  // mitt lag slutar här



  // byt namn här
  // Hämta h2-elementet
  const name = pokemonPlaceCopy.querySelector("h2");
  const nameContainer = document.createElement("div");
  const input = document.createElement("input");

  nameContainer.setAttribute("class","byttnamn-div")
  nameContainer.appendChild(name.cloneNode(true));
  nameContainer.appendChild(input);

  // Skapa knappen och lägg till eventlyssnare
  const changeName = document.createElement("button");

  changeName.innerText = "Byt namn";
  changeName.setAttribute("class", "byt-namn");
  
  changeName.addEventListener("click", () => {
    pokemonPlaceCopy.replaceChild(nameContainer, name);
    input.focus();
  });
  
  // Lägg till eventlyssnare för input-elementet
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const newName = input.value;
      const newH2 = document.createElement("h2");

      newH2.innerText = newName;
      nameContainer.replaceChild(newH2, nameContainer.firstChild);
      input.remove();
      changeName.remove()
    }
  });
 
};

//Ändra namnet på pokemon tar slut här

export { displayPokemon };
