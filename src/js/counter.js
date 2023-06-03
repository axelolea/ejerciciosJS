const [
    label,
    btnMas,
    btnMenos,
    btnReset,
    image
] = [
    '#counter',
    '#btn-mas',
    '#btn-menos',
    '#btn-reset',
    '#meme'
].map((selector) => document.querySelector(selector))

const src = './src/images/'

const images = [
    'image-1.png',
    'image-2.jpg',
    'image-3.png',
    'image-4.png',
    'image-5.jpg',
    'image-6.jpg',
].map(name => src.concat(name))


let counter = 0;
let memeCounter = 0;

const divisor = 50;
const apiUrl = 'https://cataas.com'
const jsonQuery = `${ apiUrl }/cat?json=true`

const showMeme = () => {
    image.style.visibility = 'visible'
    image.style.display = 'block'
}

const getText = num => `${ num } counts.`

const updateInterface = () => {
    if(memeCounter % divisor === 0){
        showMeme();
        fetch(jsonQuery)
        .then(resp => resp.json())
        .then(json => image.src = `${ apiUrl }${ json?.url }`)
    }
    memeCounter++;
}

const addCounter = () => {
    counter++;
    label.textContent = getText(counter)
    updateInterface()
}

const subCounter = () => {
    counter--;
    label.textContent = getText(counter)
    updateInterface()
}

const resetCounter = () => {
    counter = 0;
    memeCounter = 0;
    label.textContent = getText(counter)
}



label.textContent = getText(counter);

btnMas.onclick = addCounter
btnMenos.onclick = subCounter;
btnReset.onclick = resetCounter;