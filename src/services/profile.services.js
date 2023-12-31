import { api } from "./api"

export const GetProfileAPI = async () => {
    try {
        const { data } = await api.get('/profile', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        console.error('Cannot get profile', error)
    }
}

export const UpdateProfileAPI = async (obj) => {
    try {
        const { data } = await api.put('/profile', obj, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
     return data
    }catch (error){
        console.error('Cannot update profile', error)
    }
}

export const GetMyPosts = async () => {
    try {
        const { data } = await api.get('/profile/posts', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data
    }catch (error) {
        console.error('Cannot get posts', error)
    }
}

