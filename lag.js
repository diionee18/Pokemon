const lagSpelare = () =>{
  let antalReserv = document.querySelectorAll(".reservWrapper .pokemon-container").length
  let antalSpelare = document.querySelector("#minst-antal-spelare")
  let pokeCounter = document.querySelectorAll(".wrapper2 .pokemon-container").length
  antalSpelare.setAttribute("class","notis-section")
  if(pokeCounter < 3){
    antalSpelare.innerHTML = `<span class="lagets-spelare"> Du har ${pokeCounter} Pokémon i huvudlaget och ${antalReserv} i reserv <br>  </span>För att kunna spela behöver du minst ${3- pokeCounter} till i huvudlaget. <hr class="hr-notis"> Du kan dra Pokémons och släppa dem i både huvudlaget & reservlaget`
    antalSpelare.style.border = "solid red 5px";
    antalSpelare.style.padding = "0em 2em"
    antalSpelare.style.margin = "0em 1em"
  }else{
    antalSpelare.innerHTML = `<span class="lagets-spelare"> Du har ${pokeCounter} ordinare Pokémon <br>  </span> och du har <span class="lagets-spelare" > ${antalReserv} </span> i reserv, du kan lägga till fler. <hr class="hr-notis"> Du kan dra och släppa Pokémons. För att ändra positonen i huvudlaget så använder du knappen som finns i kortet `
    antalSpelare.style.border = "solid green 5px";
  }
}
const lagSpelareFörstaSidan = () =>{
  let antalReserv = document.querySelectorAll(".reservWrapper .pokemon-container").length
  let antalSpelareFörstaSidan = document.querySelector("#minst-antal-spelare-förstasidan")
  let pokeCounter = document.querySelectorAll(".wrapper2 .pokemon-container").length
  antalSpelareFörstaSidan.setAttribute("class","notis-sectionn-förstasidan")
    antalSpelareFörstaSidan.innerHTML = `<span class="lagets-spelare"> Du har totalt ${antalReserv + pokeCounter} Pokémon i laget </span> `
    antalSpelareFörstaSidan.style.border = "solid darkred 5px";
    antalSpelareFörstaSidan.style.padding = "0.4em 2em"

}




export {lagSpelareFörstaSidan}
export {lagSpelare}