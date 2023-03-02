const lagSpelare = () =>{
  let antalReserv = document.querySelectorAll(".reservWrapper .pokemon-container").length
  let antalSpelare = document.querySelector("#minst-antal-spelare")
  let pokeCounter = document.querySelectorAll(".wrapper2 .pokemon-container").length
  antalSpelare.setAttribute("class","notis-section")
  if(pokeCounter < 3){
    antalSpelare.innerHTML = `<span class="lagets-spelare"> Du har ${pokeCounter} Pokémon <br>  </span>För att kunna spela behöver du minst ${3- pokeCounter} till i huvudlaget`
    antalSpelare.style.border = "solid red 5px";
    antalSpelare.style.padding = "0em 2em"
  }else{
    antalSpelare.innerHTML = `<span class="lagets-spelare"> Du har ${pokeCounter} ordinare Pokémon <br>  </span> och du har <span class="lagets-spelare" > ${antalReserv} </span> i reserv, du kan lägga till fler. <br> Du kan dra och släppa Pokémons, för att ändra positonen i main så använder du knappen som finns i kortet `
    antalSpelare.style.border = "solid green 5px";
  }
}


export {lagSpelare}