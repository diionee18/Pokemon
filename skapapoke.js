import { lagSpelare } from "./lag.js";



let pokemonWrapper2 = document.querySelector(".wrapper2");
let reservWrapper = document.querySelector(".reservWrapper");
let pokemonWrapper = document.querySelector(".wrapper");
let spelareTIllagdNoits = document.querySelector(".spelaren-tillagd-notis")



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


  // Hämtar abilities här 
  const abilitiesUl = document.createElement('ul');
  const krafterText = document.createElement('p')
  
  krafterText.innerHTML = 'Abilities'
  abilitiesUl.append(krafterText)
  abilitiesUl.setAttribute("class", "ability-poke")
  for (const ability of pokemon.abilities) {
    const abilityLi = document.createElement('li');
    abilityLi.innerHTML = ability.ability.name;
    abilitiesUl.appendChild(abilityLi);
  }
  pokemonPlace.appendChild(abilitiesUl);
  pokemonWrapper.append(pokemonPlace);


  
  
  läggTill.addEventListener("click", () => {
    let pokeCounter = document.querySelectorAll(".wrapper2 .pokemon-container").length
    console.log(pokeCounter)
    if(pokeCounter < 3){
      mittLagPokemons(pokemon)
    } else if (pokeCounter === 3){
      reservLag(pokemon)

    }
  });
  läggTill.addEventListener("click", ()=>{
    spelareTIllagdNoits.style.visibility = "visible"
  })
  läggTill.addEventListener("mouseout", (e) =>{
    spelareTIllagdNoits.style.visibility = "hidden"
  })
 
};


export { displayPokemon };

const mittLagPokemons =  (pokemon) =>{
  let pokemonPlace = document.createElement("div");
  let pokeImg = document.createElement("img");
  let pokeName = document.createElement("h2");

  pokemonPlace.setAttribute("class", "pokemon-container");
  pokeImg.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
  pokeImg.setAttribute("class", "figur");

  pokeName.innerHTML = pokemon.name;

  pokemonPlace.append(pokeImg);
  pokemonPlace.append(pokeName);
  pokemonWrapper2.appendChild(pokemonPlace);




  
  // Hämtar abilities här 
  const abilitiesUl = document.createElement('ul');
  const krafterText = document.createElement('p')
  
  krafterText.innerHTML = 'Abilities'
  abilitiesUl.append(krafterText)
  abilitiesUl.setAttribute("class", "ability-poke")
  for (const ability of pokemon.abilities) {
    const abilityLi = document.createElement('li');
    abilityLi.innerHTML = ability.ability.name;
    abilitiesUl.appendChild(abilityLi);
  }
  pokemonPlace.appendChild(abilitiesUl);
  pokemonWrapper2.append(pokemonPlace);


     // Här kickar man pokemon.
     let taBort = document.createElement("button");
     taBort.innerHTML = "Kicka Pokèmon";
     taBort.setAttribute("class", "ta-bort-pokemon");
     taBort.addEventListener("click", (e) => {
       pokemonPlace.remove();
       lagSpelare();
      });
      pokemonPlace.append(taBort)
      // Här slutar kickar pokemon.

      let ändraNamnBtn = document.createElement('button')
      let input = document.createElement('input')

      ändraNamnBtn.setAttribute("class", "byt-namn")
      input.setAttribute("class", "Ändra-namn-input")
      ändraNamnBtn.innerHTML = 'Ändra namn'
      pokemonPlace.append(ändraNamnBtn)

      input.placeholder = 'Skriv in namnet här'


      ändraNamnBtn.addEventListener('click', () =>{
        pokemonPlace.append(input)
        input.focus()
      });
      input.addEventListener('keydown', (e) =>{
        if(e.key === 'Enter'){
          pokeName.innerHTML = input.value;
          input.remove()
          input.value = '';
        }
      });


}


const reservLag = (pokemon) =>{
  let pokemonPlace = document.createElement("div");
  let pokeImg = document.createElement("img");
  let pokeName = document.createElement("h2");

  pokemonPlace.setAttribute("class", "pokemon-container");
  pokeImg.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
  pokeImg.setAttribute("class", "figur");

  pokeName.innerHTML = pokemon.name;

  pokemonPlace.append(pokeImg);
  pokemonPlace.append(pokeName);
  reservWrapper.appendChild(pokemonPlace);




  
  // Hämtar abilities här 
  const abilitiesUl = document.createElement('ul');
  const krafterText = document.createElement('p')
  
  krafterText.innerHTML = 'Abilities'
  abilitiesUl.append(krafterText)
  abilitiesUl.setAttribute("class", "ability-poke")
  for (const ability of pokemon.abilities) {
    const abilityLi = document.createElement('li');
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
      pokemonPlace.append(taBort)
      // Här slutar kickar pokemon.

      let ändraNamnBtn = document.createElement('button')
      let input = document.createElement('input')

      ändraNamnBtn.setAttribute("class", "byt-namn")
      input.setAttribute("class", "Ändra-namn-input")
      ändraNamnBtn.innerHTML = 'Ändra namn'
      pokemonPlace.append(ändraNamnBtn)

      input.placeholder = 'Skriv in namnet här'


      ändraNamnBtn.addEventListener('click', () =>{
        pokemonPlace.append(input)
        input.focus()
      });
      input.addEventListener('keydown', (e) =>{
        if(e.key === 'Enter'){
          pokeName.innerHTML = input.value;
          input.remove()
          input.value = '';
        }
      });


}