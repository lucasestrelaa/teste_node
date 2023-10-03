async function createAnimal(animal){
    return await AnimalRepository.insertAnimal(animal)
}


async function updateAnimal(animal){
    return await AnimalRepository.updateAnimal(animal)
}


async function deleteAnimal(animal_id){
    if(!(await AnimalRepository.getAnimais(animal_id))){
        return await AnimalRepository.deleteAnimal(animal_id)
    }
    throw new Error()
}

async function getAnimals(){
    return await AnimalRepository.getAnimals()
}

async function getAnimal(animal){
    return await AnimalRepository.getAnimal(animal)
}
export default {
    insertAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimals,
    getAnimal,
}