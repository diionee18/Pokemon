let hittaPokeBtn = document.querySelector('#hitta-pokemon')
let mittLagBtn = document.querySelector('#mitt-lag')
let förstaSidan = document.querySelector('#sida-1')
let andraSidan = document.querySelector('#sida-2')
let searchInput = document.querySelector('#sök-pokemon')

// Delar upp sections.
förstaSidan.style.display = "block"
andraSidan.style.display = "none"

hittaPokeBtn.addEventListener('click', () =>{
förstaSidan.style.display = "block"
andraSidan.style.display = "none"
})

mittLagBtn.addEventListener('click', () =>{
förstaSidan.style.display = "none"
andraSidan.style.display = "block"
})



searchInput.addEventListener('keypress', function (e){
  if(e.key === 'Enter'){
    let name = searchInput.value
    getData(name)
  }
})

const getData = async () => {
  let url = `https://pokeapi.co/api/v2/pokemon/ ${name}`
let response = await fetch(url)
let data = await response.json()
let karraktär = data.results.name
console.log(karraktär)
}