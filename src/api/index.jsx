import axios from "axios"

const apiUrl = 'https://northwind.vercel.app/api'
 export const api = axios.create({
    baseURL: apiUrl
 }) 

