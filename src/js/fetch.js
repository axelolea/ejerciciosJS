const domain = "https://pokeapi.co"
const api = `${domain}/api/v2` // https://pokeapi.co/api/v2
const pokemonEndPoint = `${api}/pokemon` // https://pokeapi.co/api/v2/pokemon

// const testData = "/src/pikachu.json"

const container = document.querySelector("#pokeContainer")

const cardStyles = ["col-lg-4", "col-md-6", "col-sm-12", "card"]

function getPokemon(namePokemon){

    // fetch(testData)
    fetch(`${pokemonEndPoint}/${namePokemon}`)
        .then(resp => {

            if(!resp.ok) throw new Error(`Not found ${namePokemon}`)

            return resp.json()
        })
        .then(data => createCardPokemon(data))
        .catch(err => alert(err))
}


function createCardPokemon({name, sprites}){

    const [ card, img, title, body ] = ["div", "img", "p", "div"]
        .map(tag => document.createElement(tag))
    
    card.classList.add(...cardStyles)
    img.classList.add("card-img-top")
    body.classList.add("card-body")
    title.classList.add("card-text")

    title.innerText = name.toUpperCase()

    img.src = sprites.front_default;
    img.alt = `${name}-pokemon`

    body.appendChild(title)
    card.appendChild(img)
    card.appendChild(body)
    
    container.appendChild(card)
}

const inputText = document.querySelector("#pokeInput")

document
    .querySelector("#searchBtn")
    .addEventListener("click", () => {
        const pokemonValue = inputText.value

        if(!pokemonValue) return;

        getPokemon(pokemonValue)
    })