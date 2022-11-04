import axios from 'axios'

// TODO: Aquí deberíamos hacer un post con el mail y password, cotejar y traer los datos del usuario. 

// MockUp Login:

export const login = (mail, pass) => {
    let usuario = {
        validate: false
    }

    if(mail=='pedro@gmail.com' && pass=='Pedro1234'){
        usuario = {
            id: 1,
            username: 'pedro',
            nombre: 'Pedro',
            apellido: 'Consuegra',
            telefono: '600000000',
            validation: true
        }
    }

    return usuario
}