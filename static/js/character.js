export default class Character{
	constructor({name, image, gender, species, status}){
		this.name = name
		this.image = image
		this.gender = gender
		this.species = species
		this.status = status
		this.$characterImageContainer = document.querySelector('#character-image-container')
		this.$characterDescriptionContainer = document.querySelector('#character-description-container')
		this.$characterNameContainer = document.querySelector('#character-name-container')
		this.render()
	}
	
	buildImage(){
		return`
		<img class="character-image" src=${this.image} alt=${this.names}>
		`
	}
	
	buildName(){
		return`
		<div class="character-name">
		<h2>$this.names</h2>
		</div>
		`
	}
	
	buildDescription(){
		return`
		<div class="character-labels">
		<h3 class="characte-label">Genero ${this.gender}</h3>
		<h3 class="characte-label">Especie ${this.species}</h3>
		<h3 class="characte-label">Status ${this.status}</h3>
		</div>
		`
	}
	
	render(){
		$characterImageContainer.innerHTML = this.buildImage()
		$characterNameContainer.innerHTML = this.buildName()
		$characterDescriptionContainer.innerHTML = this.buildDescription()
	}
	
}