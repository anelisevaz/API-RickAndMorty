
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
   if(this.species == "Human"){
    return `
      <img class="character-image-human" src=${this.image} alt=${this.name}>
    `}
    else{
return `
	<img class="character-image-alien"" src=${this.image} alt=${this.name}>
    `
  }}
  
  
  buildName() {
	if(this.species == "Human"){
    return `
       <h1 class="character-name-human">${this.name}</h1>
      </div>
    `}
    else if(this.species == "Alien"){
return `
        <div class="character-name-alien">
        <h1>${this.name}</h1>
      </div>
    `
  }
  else{
return `
        <div class="character-name-human">
        <h1>${this.name}</h1>
      </div>
    `
  }}
  
  
  buildDescription() {
if(this.species == "Human"){
return `
        <p class="character-species-human">Espécie: ${this.species}</p>
        <p class="character-gender-human">Genero: ${this.gender}</p>
        <p class="character-type-human">Tipo: ${this.type}</p>
        <p class="character-status-human">Status: ${this.status}</p>
      
`}

else if(this.species == "Humanoid" ){
return `
        <p class="character-species-alihu">Espécie: ${this.species}</p>
        <p class="character-gender-alihu">Genero: ${this.gender}</p>
        <p class="character-type-alihu">Tipo: ${this.type}</p>
        <p class="character-status-alihu">Status: ${this.status}</p>       
        `}

else if(this.species == "Alien" ){
return `
        <p class="character-species-alihu">Espécie: ${this.species}</p>
        <p class="character-gender-alihu">Genero: ${this.gender}</p>
        <p class="character-type-alihu">Tipo: ${this.type}</p>
        <p class="character-status-alihu">Status: ${this.status}</p>       
        `}
        
else if(this.species == "Animal" || this.species == "Mythological Creature" ){
return `
        <p class="character-species-animyth">Espécie: ${this.species}</p>
        <p class="character-gender-animyth">Genero: ${this.gender}</p>
        <p class="character-type-animyth">Tipo: ${this.type}</p>
        <p class="character-status-animyth">Status: ${this.status}</p>       
        `}
        
else if(this.species == "Cronenberg" || this.species == "Disease" ){
return `
        <p class="character-species-disease">Espécie: ${this.species}</p>
        <p class="character-gender-disease">Genero: ${this.gender}</p>
        <p class="character-type-disease">Tipo: ${this.type}</p>
        <p class="character-status-disease">Status: ${this.status}</p>       
        `}
        
                
else if(this.species == "Poopybutthole" || this.species == "Robot" ){
return `
        <p class="character-species-robot">Espécie: ${this.species}</p>
        <p class="character-gender-robot">Genero: ${this.gender}</p>
        <p class="character-type-robot">Tipo: ${this.type}</p>
        <p class="character-status-robot">Status: ${this.status}</p>       
        `}


else{ //unknown
return `
        <p class="character-species">Espécie: ${this.species}</p>
        <p class="character-gender">Genero: ${this.gender}</p>
        <p class="character-type">Tipo: ${this.type}</p>
        <p class="character-status">Status: ${this.status}</p>       
              `}
  }
 
  
  
  render() {
    this.$characterImageContainer.innerHTML = this.buildImage()
    this.$characterNameContainer.innerHTML = this.buildName()
    this.$characterDescriptionContainer.innerHTML = this.buildDescription()
    this.$characterNamePlaceHolderContainer.innerHTML = this.name
  }
}