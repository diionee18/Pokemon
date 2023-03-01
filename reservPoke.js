let pokemonWrapper2 = document.querySelector(".wrapper2");
let reservWrapper = document.querySelector(".reservWrapper");
let pokemonWrapper = document.querySelector(".wrapper");
let spelareTIllagdNoits = document.querySelector(".spelaren-tillagd-notis");
let högerKnapp = document.createElement('button')


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
  taBort.addEventListener("click", (e) => {
    pokemonPlace.remove();
    lagSpelare();
  });
  pokemonPlace.append(taBort);
  // Här slutar kickar pokemon.

  let ändraNamnBtn = document.createElement("button");
  let input = document.createElement("input");

  ändraNamnBtn.setAttribute("class", "byt-namn");
  input.setAttribute("class", "Ändra-namn-input");
  ändraNamnBtn.innerHTML = "Ändra namn";
  pokemonPlace.append(ändraNamnBtn);

  input.placeholder = "Skriv in namnet här";

  ändraNamnBtn.addEventListener("click", () => {
    pokemonPlace.append(input);
    input.focus();
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      pokeName.innerHTML = input.value;
      input.remove();
      input.value = "";
    }
  });
  pokemonPlace.draggable = true;
  
  // let döljHögerKnapp = document.querySelectorAll('.reservWrapper .pokemon-container .höger')
  // döljHögerKnapp.style.display = "none"
  högerKnapp.style.display = "none"
  

  };


  export {reservLag}