async function createAnimal(req, res, next){
    try {
        let animal = req.body

        /* insert validation */
        animal = await animalService.createAnimal(animal)
        res.send(animal)
        logger.info(`POST / - ${JSON.stringfy()}`)
    } catch (err) {
        next (err)
    }
}

async function updateAnimal(req, res, next){
    try {
        let animal = req.body

        /* insert validation */
        animal = await animalService.updateAnimal(animal)
        res.send(animal)
        // logger.info(`POST / - ${JSON.stringfy()}`)
    } catch (err) {
        next (err)
    }
}

async function deleteAnimal(req, res, next){
    try {
        let animal = req.body

        /* insert validation */
        await animalService.deleteAnimal(req.params.animal_id)
        res.end()
        logger.info(`DELETE /animal/:animal_id`)
    } catch (err) {
        next (err)
    }
}

async function getAnimal(req, res, next){
    try {
        
        res.send(await animalService.getAnimals())

        logger.info(`POST / - ${JSON.stringfy()}`)
    } catch (err) {
        next (err)
    }
}

async function getAnimal(req, res, next){
    try {
        const animal = await animalService.getAnimal(
            req.params.animal_id
        )
        res.send(animal)

        logger.info(`GET / animal/:animal_id`)
    } catch (err) {
        next (err)
    }
}

export default {
    createAnimal,
    deleteAnimal,
    getAnimal,
    getAnimals,
    updateAnimal,
}
