import { connect } from './db.js'

async function insertUsuario(usuario){
    const conn = await connect()

    try {
        const sql = "INSERT INTO usuario (nome, telefone) VALUES ($1, $2) RETURNING *"
        const values = [usuario.nome, usuario.telefone]
        const res = await conn.query(sql, values)
        return res.rows[0]
    }catch (err) {
        throw err;
    }finally {
        conn.release()
    }
}

async function updateUsuario(usuario){
    const conn = await connect()
    try {
        const sql= "UPDATE usuario SET NOME $1, TELEFONE $2 WHERE usuario_id = $3 RETURNING"
        const values = [
            usuario.nome,
            usuario.telefone,
            usuario.usuario_id
        ]
        const res = await conn.query(sql, values)
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function deleteUsuario(usuario_id){
    const conn = await connect()
    try {
        await conn.query("DELETE FROM usuario WHERE usuario_id = $1", [
            usuario_id,
        ])
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getUsuario(){
    const conn = await connect()
    try {
       const res = await conn.query("SELECT * FROM usuario", [
            usuario_id,
        ])
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}
async function getUsuario(usuario){
    const conn = await connect()
    try {
       const res = await conn.query("SELECT * FROM usuario WHERE usuario_id = $1", [
            usuario_id,
        ])
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

export default {
    insertUsuario,
    updateUsuario,
    deleteUsuario,
    getUsuario,
    getUsuario,
}
