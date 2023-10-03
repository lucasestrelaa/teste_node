async function createUsuario(req, res, next){
    try {
        let usuario = req.body

        /* insert validation */
        usuario = await usuarioService.createUsuario(usuario)
        res.send(usuario)
        logger.info(`POST / - ${JSON.stringfy()}`)
    } catch (err) {
        next (err)
    }
}

async function updateUsuario(req, res, next){
    try {
        let usuario = req.body

        /* insert validation */
        usuario = await usuarioService.updateUsuario(usuario)
        res.send(usuario)
    } catch (err) {
        next (err)
    }
}

async function deleteUsuario(req, res, next){
    try {
        let usuario = req.body

        /* insert validation */
        await usuarioService.deleteUsuario(req.params.usuario_id)
        res.end()
        logger.info(`DELETE /usuario/:usuario_id`)
    } catch (err) {
        next (err)
    }
}

async function getUsuario(req, res, next){
    try {
        
        res.send(await usuarioService.getUsuarios())

        logger.info(`POST / - ${JSON.stringfy()}`)
    } catch (err) {
        next (err)
    }
}

async function getUsuario(req, res, next){
    try {
        const usuario = await usuarioService.getUsuario(
            req.params.usuario_id
        )
        res.send(usuario)

        logger.info(`GET / usuario/:usuario_id`)
    } catch (err) {
        next (err)
    }
}

export default {
    createUsuario,
    deleteUsuario,
    getUsuario,
    getUsuarios,
    updateUsuario,
}
