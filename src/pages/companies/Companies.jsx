import React, { useEffect, useState } from 'react'
import { companyServices } from '../../services/CompanyServices'
import CompanyCard from '../../components/companyCard/CompanyCard'

function Companies() {
    const [companies, setCompanies] = useState([])
    useEffect(() => {
        companyServices.getCompanies().then((data) => setCompanies(data))
    }, [])
    return (
        <div className='my-14 w-[90%] m-auto flex flex-col gap-10'>
            <h1 className='text-center font-bold text-2xl'>Şirkətlərimiz</h1>
            {
                companies.map((company) => <CompanyCard key={company.id} {...company}/>)
            }
        </div>
    )
}

export default Companies