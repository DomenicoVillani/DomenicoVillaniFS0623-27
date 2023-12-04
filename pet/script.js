let pets = []
class Pet {
    constructor(_petName,_petOwner,_species,_breed){
        this.petName=_petName
        this.petOwner=_petOwner    
        this.species=_species
        this.breed=_breed
    }
    hasSameOwner(secondPet){
        return this.petOwner === secondPet.petOwner;
    }
}

function insertPet(){
    let petName = document.getElementById("pName").value
    let petOwner = document.getElementById("oName").value
    let species = document.getElementById("species").value
    let breed = document.getElementById("breed").value
    const pet = new Pet(petName,petOwner,species,breed)
    pets.push(pet)
    let text = document.createElement('li')
    let ul = document.querySelector('ul')
    text.innerHTML = `${petName} e' un ${species} ${breed}. Il nome del proprietario e' ${petOwner}`
    ul.appendChild(text)
    document.getElementById("pName").value = ""
    document.getElementById("oName").value = ""
    document.getElementById("species").value = ""
    document.getElementById("breed").value = ""

}

function sameOwner(){
    for(let i=0; i<pets.length; i++){
        for(let j=i+1; j<pets.length; j++){
            if(pets[i].hasSameOwner(pets[j])){
                console.log(true)
                return true
            }
        }
    }
    console.log(false)
    return false
}