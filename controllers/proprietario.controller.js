async function createProprietario(req, res, next){
    try {
        let proprietario = req. body
        if(!proprietario.nome || !proprietario.telefone){
            throw new Error("Nome e telefone são obrigatórios")
        }
        //service
        console.log('proprietário')
    } catch (error) {
        next(err)
    }
}

export default {
    createProprietario,
}