async function createUsuario(usuario){
    return await UsuarioRepository.insertUsuario(usuario)
}


async function updateUsuario(usuario){
    return await UsuarioRepository.updateUsuario(usuario)
}


async function deleteUsuario(usuario_id){
    if(!(await AnimalRepository.getAnimais(usuario_id))){
        return await UsuarioRepository.deleteUsuario(usuario_id)
    }
    throw new Error()
}

async function getUsuarios(){
    return await UsuarioRepository.getUsuarios()
}

async function getUsuario(usuario){
    return await UsuarioRepository.getUsuario(usuario)
}
export default {
    insertUsuario,
    updateUsuario,
    deleteUsuario,
    getUsuarios,
    getUsuario,
}