let hittaPokeBtn = document.querySelector('#hitta-pokemon')
let mittLagBtn = document.querySelector('#mitt-lag')
let förstaSidan = document.querySelector('#sida-1')
let andraSidan = document.querySelector('#sida-2')
let searchInput = document.querySelector('#sök-pokemon')
let pokemonDivContainer = document.querySelector('#pokemon-container')
let pokemonPlace = document.querySelector('#pokemon-container')
let inputDiv =  document.querySelector('.input-div')

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


const getPokemonData = async query =>{
  const url = `https://pokeapi.co/api/v2/pokemon/${query}`
  const response = await fetch(url)
console.log('getPokemonData', response.status)
  if(response.status == 404){
    let pokeError = document.createElement('p');
    pokeError.innerText = `Kunde inte hitta pokemon ${searchInput.value}`;
    pokeError.setAttribute('id','error-meddelande');
    document.body.append(pokeError)
    searchInput.addEventListener('keydown', (e) =>{

      pokeError.remove();
      
    }, {once: true }  )
    return;
    
  }
  const pokemon = await response.json()
  console.log(pokemon)

  let pokeImg = document.createElement('img');
  pokeImg.setAttribute('src', pokemon.sprites.other.dream_world.front_default)
  pokeImg.setAttribute('id','figur')
  let pokeName = document.createElement('h2');
  pokeName.innerHTML = pokemon.name
  pokemonPlace.innerHTML = '';
  pokemonPlace.append(pokeImg)
  pokemonPlace.append(pokeName)

}

searchInput.addEventListener('keypress', (e) =>{
  if(e.key === 'Enter'){
    getPokemonData(searchInput.value)
        
  }
})