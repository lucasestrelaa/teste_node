async function createCaixa(caixa){
    return await CaixaRepository.insertCaixa(caixa)
}


async function updateCaixa(caixa){
    return await CaixaRepository.updateCaixa(caixa)
}


async function deleteCaixa(caixa_id){
    if(!(await AnimalRepository.getAnimais(caixa_id))){
        return await CaixaRepository.deleteCaixa(caixa_id)
    }
    throw new Error()
}

async function getCaixas(){
    return await CaixaRepository.getCaixas()
}

async function getCaixa(caixa){
    return await CaixaRepository.getCaixa(caixa)
}
export default {
    insertCaixa,
    updateCaixa,
    deleteCaixa,
    getCaixas,
    getCaixa,
}