async function createCaixa(req, res, next){
    try {
        let caixa = req.body

        /* insert validation */
        caixa = await caixaService.createCaixa(caixa)
        res.send(caixa)
        logger.info(`POST / - ${JSON.stringfy()}`)
    } catch (err) {
        next (err)
    }
}

async function updateCaixa(req, res, next){
    try {
        let caixa = req.body

        /* insert validation */
        caixa = await caixaService.updateCaixa(caixa)
        res.send(caixa)
    } catch (err) {
        next (err)
    }
}

async function deleteCaixa(req, res, next){
    try {
        let caixa = req.body

        /* insert validation */
        await caixaService.deleteCaixa(req.params.caixa_id)
        res.end()
        logger.info(`DELETE /caixa/:caixa_id`)
    } catch (err) {
        next (err)
    }
}

async function getCaixa(req, res, next){
    try {
        
        res.send(await caixaService.getCaixas())

        logger.info(`POST / - ${JSON.stringfy()}`)
    } catch (err) {
        next (err)
    }
}

async function getCaixa(req, res, next){
    try {
        const caixa = await caixaService.getCaixa(
            req.params.caixa_id
        )
        res.send(caixa)

        logger.info(`GET / caixa/:caixa_id`)
    } catch (err) {
        next (err)
    }
}

export default {
    createCaixa,
    deleteCaixa,
    updateCaixa,
    getCaixas,
    getCaixa,
}
