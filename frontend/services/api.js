import axios from 'axios'

// import { parseCookies } from 'nookies'

// const { 'amorimdrywall-token': token } = parseCookies()

const api = axios.create({
    baseURL: 'http://localhost:3030'
})

// if(token){
//     api.defaults.headers['Authorization'] = `Bearer ${token}`
// }

export default api;