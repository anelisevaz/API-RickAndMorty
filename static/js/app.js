import API from './api.js'
import Character from './character.js'
const api = new API()
let currentCaracter = 1
const $loadNext = document.querySelector('#load-next')
const $loadHome = document.querySelector('#load-home')
const $loadRandom = document.querySelector('#load-random')

$loadNext.addEventListener('click', async () => {
  const characterData = await api.getCharacter(++currentCaracter)
  new Character(characterData)
})

$loadHome.addEventListener('click', async () => {
  const characterData = await api.getCharacter(currentCaracter=1)
  new Character(characterData)
})

$loadRandom.addEventListener('click', async () => {
  const characterData = await api.getCharacter(Math.floor(Math.random() * 500))
  new Character(characterData)
})



async function initApp(initCharacterId) {
  const characterData = await api.getCharacter(initCharacterId)
  console.log(characterData)
  new Character(characterData)
}

initApp(currentCaracter)


