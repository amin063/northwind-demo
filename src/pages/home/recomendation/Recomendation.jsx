import React, { useEffect, useState } from 'react'
import CompanyCard from '../../../components/companyCard/CompanyCard'
import SimpleLink from '../../../components/buttons/SimpleLink'
import { companyServices } from '../../../services/CompanyServices'

function Recomendation() {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        companyServices.getCompanies().then(data => setCompanies(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl font-bold text-center my-5'>Recomendation</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    companies.slice(0, 3).map(item => <CompanyCard key={item.id} {...item} />)
                }
            </div>
            <div className='flex justify-center my-5'>
                <SimpleLink to={'/companies'} title={"Bütün Şirkətlər"} />
            </div>
        </div>
    )
}

export default Recomendation