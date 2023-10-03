import { connect } from './db.js'

async function insertCaixa(caixa){
    const conn = await connect()

    try {
        const sql = "INSERT INTO caixas (nome, telefone) VALUES ($1, $2) RETURNING *"
        const values = [caixa.nome, caixa.telefone]
        const res = await conn.query(sql, values)
        return res.rows[0]
    }catch (err) {
        throw err;
    }finally {
        conn.release()
    }
}

async function updateCaixa(caixa){
    const conn = await connect()
    try {
        const sql= "UPDATE caixas SET NOME $1, TELEFONE $2 WHERE caixa_id = $3 RETURNING"
        const values = [
            caixa.nome,
            caixa.telefone,
            caixa.caixa_id
        ]
        const res = await conn.query(sql, values)
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function deleteCaixa(caixa_id){
    const conn = await connect()
    try {
        await conn.query("DELETE FROM caixas WHERE caixa_id = $1", [
            caixa_id,
        ])
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function getCaixas(){
    const conn = await connect()
    try {
       const res = await conn.query("SELECT * FROM caixas", [
            caixa_id,
        ])
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}
async function getCaixa(caixa){
    const conn = await connect()
    try {
       const res = await conn.query("SELECT * FROM caixas WHERE caixa_id = $1", [
            caixa_id,
        ])
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

export default {
    insertCaixa,
    updateCaixa,
    deleteCaixa,
    getCaixas,
    getCaixa,
}
