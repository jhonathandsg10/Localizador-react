import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.github.com/users/',
    timeout: 1000,
});

export async function getUser(username: string) {
    const usuario = await api.get(`${username}`)
    return(usuario.data)
}