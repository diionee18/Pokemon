// Visa informationen om den matchande Pokemon på webbsidan
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

  // Här försöker jag att räkna hur många spelare en har i laget.
  let antalSpelare = document.querySelector(".antal-spelare");
  let spelareCounter = document.querySelectorAll(
    ".wrapper2 .pokemon-container"
  ).length;
  let spelarPlus = spelareCounter++;

  if (spelarPlus < 3) {
    antalSpelare.innerText = `du har ${spelareCounter} spelare`;
    pokemonWrapper2.append(antalSpelare);
  }

  // Här flyttar jag den Pokemon man valt att ha i sitt lag till Mitt lag samt kicka pokemon.
  let taBort = document.createElement("button");
  taBort.innerHTML = "Kicka Pokèmon";
  taBort.setAttribute("class", "ta-bort-pokemon");

  const pokemonPlaceCopy = pokemonPlace.cloneNode(true);
  pokemonPlaceCopy.removeChild( pokemonPlaceCopy.querySelector(".lägg-till-pokebtn"));

      läggTill.addEventListener("click", () => {
      pokemonPlaceCopy.append(taBort);
      pokemonWrapper2.append(pokemonPlaceCopy); 
      pokemonPlaceCopy.appendChild(changeName);
    })
      


      taBort.addEventListener("click", (e) => {
        pokemonPlaceCopy.remove();
      }); // mitt lag slutar här



      //Ändra namnet på pokemon
      const changeName = document.createElement("button");
      changeName.innerText = "Byt namn";
      changeName.setAttribute("class", "byt-namn");
      const name = pokemonPlaceCopy.querySelector("h2");
      const input = document.createElement("input");

      changeName.addEventListener("click", (e) => {
        pokemonPlaceCopy.replaceChild(input, name); 
      });

    



        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            const newName = input.value;
            const newH2 = document.createElement("h2");
            newH2.innerText = newName;
            pokemonPlaceCopy.replaceChild(newH2, input);

          }
          // e.target.remove();
        });
      }

      


      
    
   
  
 //Ändra namnet på pokemon tar slut här

export {displayPokemon}