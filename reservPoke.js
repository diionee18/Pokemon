import { lagSpelare } from "./lag.js";

let pokemonWrapper2 = document.querySelector(".wrapper2");
let reservWrapper = document.querySelector(".reservWrapper");




const reservLag = (pokemon) => {
  let pokemonPlace = document.createElement("div");
  let pokeImg = document.createElement("img");
  let pokeName = document.createElement("h2");

  pokemonPlace.setAttribute("class", "pokemon-container");
  pokemonPlace.setAttribute(
    "id",
    Math.random().toString(16).slice(2).toString()
  );
  pokeImg.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
  pokeImg.setAttribute("class", "figur");

  pokeName.innerHTML = pokemon.name;

  pokemonPlace.append(pokeImg);
  pokemonPlace.append(pokeName);
  reservWrapper.appendChild(pokemonPlace);

  // Hämtar abilities här
  const abilitiesUl = document.createElement("ul");
  const krafterText = document.createElement("p");

  krafterText.innerHTML = "Abilities";
  abilitiesUl.append(krafterText);
  abilitiesUl.setAttribute("class", "ability-poke");
  for (const ability of pokemon.abilities) {
    const abilityLi = document.createElement("li");
    abilityLi.innerHTML = ability.ability.name;
    abilitiesUl.appendChild(abilityLi);
  }
  pokemonPlace.appendChild(abilitiesUl);
  reservWrapper.append(pokemonPlace);

  // Här kickar man pokemon.
  let taBort = document.createElement("button");
  taBort.innerHTML = "Kicka Pokèmon";
  taBort.setAttribute("class", "ta-bort-pokemon");

  let bekräftelseDiv = document.createElement("div");
  bekräftelseDiv.setAttribute("class", "bekräftelse-div");

  let bekräftelseText = document.createElement("p");
  bekräftelseText.setAttribute("class", "bekräftelse-text");
  bekräftelseText.innerHTML = "Vill du verkligen ta bort Pokémon?";

  let bekräftelseKnapp = document.createElement("button");
  bekräftelseKnapp.setAttribute("class", "bekräftelse-knapp");
  bekräftelseKnapp.innerHTML = "Ta bort";

  let avbrytKnapp = document.createElement("button");
  avbrytKnapp.setAttribute("class", "avbryt-knapp");
  avbrytKnapp.innerHTML = "Avbryt";

  bekräftelseDiv.append(bekräftelseText);
  bekräftelseDiv.append(bekräftelseKnapp);
  bekräftelseDiv.append(avbrytKnapp);

  pokemonPlace.append(bekräftelseDiv);

  taBort.addEventListener("click", (e) => {
    bekräftelseDiv.style.display = "block";
    lagSpelare();
  });

  avbrytKnapp.addEventListener("click", () => {
    bekräftelseDiv.style.display = "none";
  });
  pokemonPlace.append(taBort);

  bekräftelseKnapp.addEventListener("click", () => {
    pokemonPlace.remove();
    lagSpelare();
  });

 
  // Här slutar kickar pokemon.

  //Ändra namnet på pokemon
  let ändraNamnBtn = document.createElement("button");
  ändraNamnBtn.setAttribute("class", "byt-namn");
  
  let input = document.createElement("input");
  input.setAttribute("class", "Ändra-namn-input");

  let avbrytBytaNamn = document.createElement("button")
  avbrytBytaNamn.setAttribute("class", "avbryt-namn-x")
  avbrytBytaNamn.innerHTML = "Avbryt"

  ändraNamnBtn.innerHTML = "Ändra namn";
  pokemonPlace.append(ändraNamnBtn);

  input.placeholder = "Skriv in ett namn";

  ändraNamnBtn.addEventListener("click", () => {
    pokemonPlace.append(input);
    pokemonPlace.append(avbrytBytaNamn)
    input.focus();
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      pokeName.innerHTML = input.value;
      input.remove();
      avbrytBytaNamn.remove();
      input.value = "";
    }
  });

  avbrytBytaNamn.addEventListener("click", () =>{
    input.remove()
    avbrytBytaNamn.remove()
  })
  //Ändra namnet på pokemon slutar här

    pokemonPlace.draggable = true;
  // }

  
   // ändra ordning knapp
   let högerKnapp = document.createElement("button");
   högerKnapp.innerHTML = "klicka för att flytta ett steg fram";
   högerKnapp.setAttribute("class", "höger");
 
   pokemonPlace.append(högerKnapp);

   högerKnapp.style.display = "none"
 
   högerKnapp.addEventListener("click", flyttaHöger);
 
   function flyttaHöger() {
     if (pokemonPlace && pokemonPlace.previousElementSibling) {
       pokemonWrapper2.insertBefore(
         pokemonPlace,
         pokemonPlace.previousElementSibling
       );
     }
   }
   pokeImg.draggable = false
  

  };


  export {reservLag}