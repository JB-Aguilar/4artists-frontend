import { api } from "./api"

export const SignUpAPI = async (username, email, password, bdate) => {
    try {
        const { data } = await api.post('/auth/signup', { username, email, password, bdate})
        localStorage.setItem('token', data.token)
        return data === 'exist' && 'error'
    } catch (error) {
        console.error('Cannot Sign up', error)
    }
}

export const CreateProfileAPI = async (bio, location, website ) => {
    try {
        const { data } = await api.put('/profile', {bio, location, website}, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        return data === 'Unauthorized' && 'error'
    } catch (error) {
        console.error('Cannot Sign up', error)
    }
}

export const LoginAPI = async (email, password) => {
    try {
        console.log(email, password)
        const { data } = await api.post('/auth/login', {email, password})
        localStorage.setItem('token', data.token)
        console.log(data)
        return data === 'incorrect' && 'error'
    }catch (error) {
        console.error('Cannot Sign up', error)
    }
}