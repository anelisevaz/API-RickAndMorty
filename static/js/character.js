export default class Character {
  constructor({ name, image, gender, species, type, status }) {
    this.name = name
    this.image = image
    this.gender = gender
    this.species = species
    this.type = type
    this.status = status
    this.$characterImageContainer = document.querySelector('#character-image-container')
    this.$characterNameContainer = document.querySelector('#character-name-container')
    this.$characterDescriptionContainer = document.querySelector('#character-description-container')
    this.$characterStatusContainer = document.querySelector('#character-status-container')
    this.$characterNamePlaceHolderContainer = document.querySelector('#character-name-placeholder')
    this.render()
  }
  buildImage() {
    return `
      <img class="character-image" src=${this.image} alt=${this.name}>
    `
  }
  buildName() {
    return `
      <div class="character-name">
        <h1>${this.name}</h1>
      </div>
    `
  }
  buildDescription() {
if(this.gender == "Female"){
return `
<div class="character-labels">
        <p class="character-labeli">Genero: ${this.gender}</p>`}
else{
return `<div class="character-labels">
        <p class="character-labelo">Genero: ${this.gender}</p>
        `}
  }
  
  buildStatus(){
	return`
	 <div class="character-labels">
        <p class="character-status">Status: ${this.status}</p>
        <p class="character-species">Espécie: ${this.species}</p>
        <p class="character-type">Tipo: ${this.type}</p>
      </div>
	`
}
  
  
  render() {
    this.$characterImageContainer.innerHTML = this.buildImage()
    this.$characterNameContainer.innerHTML = this.buildName()
    this.$characterDescriptionContainer.innerHTML = this.buildDescription()
    this.$characterStatusContainer.innerHTML = this.buildStatus()
    this.$characterNamePlaceHolderContainer.innerHTML = this.name
  }
}