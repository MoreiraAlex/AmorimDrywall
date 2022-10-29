import axios from 'axios'

import { parseCookies } from 'nookies'

const { 'amorimdrywall-token': token } = parseCookies()

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL
})

// api.interceptors.request.use(config => {
//     console.log(config)

//     return config
// })

if(token){
    api.defaults.headers['Authorization'] = `Bearer ${token}`
}

export default api;