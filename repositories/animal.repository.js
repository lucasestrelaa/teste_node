import { connect } from './db.js'

async function insertAnimal(animal){
    const conn = await connect()

    try {
        const sql = "INSERT INTO animals (nome, telefone) VALUES ($1, $2) RETURNING *"
        const values = [animal.nome, animal.telefone]
        const res = await conn.query(sql, values)
        return res.rows[0]
    }catch (err) {
        throw err;
    }finally {
        conn.release()
    }
}

async function updateAnimal(animal){
    const conn = await connect()
    try {
        const sql= "UPDATE animals SET NOME $1, TELEFONE $2 WHERE animal_id = $3 RETURNING"
        const values = [
            animal.nome,
            animal.telefone,
            animal.animal_id
        ]
        const res = await conn.query(sql, values)
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function deleteAnimal(animal_id){
    const conn = await connect()
    try {
        await conn.query("DELETE FROM animals WHERE animal_id = $1", [
            animal_id,
        ])
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getAnimals(){
    const conn = await connect()
    try {
       const res = await conn.query("SELECT * FROM animals", [
            animal_id,
        ])
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}
async function getAnimal(animal_id){
    const conn = await connect()
    try {
       const res = await conn.query("SELECT * FROM animals WHERE animal_id = $1", [
            animal_id,
        ])
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

export default {
    insertAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimals,
    getAnimal,
}
