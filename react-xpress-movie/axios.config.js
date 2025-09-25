import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:3000'

})


api.interceptors.request.use((request) => {
    if(request.url.includes('personnes')) {
        const username = localStorage.getItem('username')
        const password = localStorage.getItem('password')
        const token =btoa(`${username}:${password}`)
        request.headers['Authorization'] = `Basic ${token}`
    }
    return request
})


export default api