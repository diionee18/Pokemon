const lagSpelare = () =>{
  let antalSpelare = document.querySelector("#minst-antal-spelare")
  let pokeCounter = document.querySelectorAll(".wrapper2 .pokemon-container").length
  if(pokeCounter < 3){
    antalSpelare.innerHTML = `<span class="lagets-spelare"> Du har ${pokeCounter} Pokémons <br>  </span>För att kunna spela behöver du ${3- pokeCounter} till`
  }else{
    antalSpelare.innerHTML = `<span class="lagets-spelare"> Du har ${pokeCounter} Pokémons <br>  </span> du kan lägga till fler i reserv`
  }
}


export {lagSpelare}