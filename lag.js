const lagSpelare = () =>{
  let antalSpelare = document.querySelector("#minst-antal-spelare")
  let pokeCounter = document.querySelectorAll(".wrapper2 .pokemon-container").length
  if(pokeCounter < 3){
    antalSpelare.innerHTML = `<span class="lagets-spelare"> Du har ${pokeCounter} Pokémons <br>  </span>Du behöver ${3- pokeCounter} till för att kunna spela `
  }else{
    antalSpelare.innerHTML = `Du har ${pokeCounter} spelare, <br> du kan lägga till fler i reserv`
  }
}


export {lagSpelare}