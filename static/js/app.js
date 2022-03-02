import API from './api.js'
import API from './character.js'
const api = new API()
let currentCaracter = 4
const $loadNext = document.querySelector('#load-next')

$loadNext.addEventListener('click', async () =>{
	const characterData = await api.getCharacter(++currentCharacter)
	new Character(characterData)
	
})


async function initApp(initCharacterId){
	const characterData = await api.getCharacter(initCharacterId)
	console.log(characterData)
	new Character(characterData)
}
initApp(currentCaracter)
