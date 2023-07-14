import { api } from "./api"

export const GetUsers = async () => {
    try {
        const { data } = await api.get('/users')
        return data
    }catch(error){
        console.error('Cannot get users', error)
    }
}