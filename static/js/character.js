
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
	if(this.species == "Human" && this.status == "Alive"){
    return `
       <h1 class="character-namee">${this.name}</h1>
      </div>
    `}
    else{
return `
        <div class="character-name">
        <h1>${this.name}</h1>
      </div>
    `
  }}
  
  
  
  buildDescription() {
if(this.species == "Human" && this.status == "Alive"){
return `

        <p class="character-species">Espécie: ${this.species}</p>
         <div class="character-labels">
        <p class="character-gender">Genero: ${this.gender}</p>
        <p class="character-type">Tipo: ${this.type}</p>
        <p class="character-status">Status: ${this.status}</p>
      
`}
else if(this.species == "Human" && this.status == "Dead"){
return `
        <p class="character-species">Espécie: ${this.species}</p>
         <div class="character-labels">
        <p class="character-gender">Genero: ${this.gender}</p>
        <p class="character-type">Tipo: ${this.type}</p>
        <p class="character-status">Status: ${this.status}</p>
       
        `}

else{
return `
        <p class="character-species">Espécie: ${this.species}</p>
        	 <div class="character-labels">
        <p class="character-gender">Genero: ${this.gender}</p>
        <p class="character-type">Tipo: ${this.type}</p>
        <p class="character-status">Status: ${this.status}</p>       
       
       
       
       <p>
			Espécies:
			unknown
			Alien
			Human
			Poopybutthole - espécie fantasma quadridimensional, Ele sobrevive de vidas semelhantes às que os caranguejos eremitas usam para roubar outras conchas
			Mythological Creature
			Animal
			Robot
			Cronenberg - A Mosca - iamgem
			Humanoid
			Disease  -doença
       </p>
        `}
  }
 

  
  render() {
    this.$characterImageContainer.innerHTML = this.buildImage()
    this.$characterNameContainer.innerHTML = this.buildName()
    this.$characterDescriptionContainer.innerHTML = this.buildDescription()
    this.$characterNamePlaceHolderContainer.innerHTML = this.name
  }
}