const lagSpelare = () =>{
  let antalReserv = document.querySelectorAll(".reservWrapper .pokemon-container").length
  let antalSpelare = document.querySelector("#minst-antal-spelare")
  let pokeCounter = document.querySelectorAll(".wrapper2 .pokemon-container").length
  antalSpelare.setAttribute("class","notis-section")
  if(pokeCounter < 3){
    antalSpelare.innerHTML = `<span class="lagets-spelare"> Du har ${pokeCounter} Pokémons <br>  </span>För att kunna spela behöver du minst ${3- pokeCounter} till`
    antalSpelare.style.border = "solid red 5px";
    antalSpelare.style.padding = "0em 2em"
  }else{
    antalSpelare.innerHTML = `<span class="lagets-spelare"> Du har ${pokeCounter} ordinare Pokémons <br>  </span> och du har <span class="lagets-spelare" > ${antalReserv} </span> i reserv du kan lägga till fler `
    antalSpelare.style.border = "solid green 5px";
  }
}


export {lagSpelare}