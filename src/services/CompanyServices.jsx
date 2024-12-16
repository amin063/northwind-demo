import { api } from "../api"

export const companyServices = {
    getCompanies: async()=>{
        const res = await api.get('/suppliers')
        return res.data 
    },
    getCompany: async(id)=>{
        const res = await api.get( `/suppliers/${id}`)
        return res.data
    },
    addCompany: async(data)=>{
        try {
            const res = await api.post('/suppliers' , data)
            alert("Sizin artıq şirkətiniz var.")
        } catch (error) {
            
        }
    }
}