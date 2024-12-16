import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { companyServices } from '../../services/CompanyServices'
import SimpleLink from '../../components/buttons/SimpleLink'
import CompanyCard from '../../components/companyCard/CompanyCard'

function CompanyDetails() {
    const [company, setCompany] = useState({})
    const [companies, setCompanies] = useState([])
    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        companyServices.getCompany(id).then((data) => setCompany(data))
    }, [])

    useEffect(() => {
        companyServices.getCompanies().then((data) => setCompanies(data))
    }, [])

    const { companyName, contactName, contactTitle, address } = company
    return (
        <div className='my-14 w-[90%] m-auto flex justify-center items-center flex-col gap-5'>
            <h1 className='text-center font-bold text-2xl'>{companyName}</h1>
            <p className='text-lg'>
                Bu şirkətin adı {companyName} olub, {contactName} tərəfindən təmsil olunur. O, {contactTitle} vəzifəsində çalışır və şirkətin əlaqə və marketinq proseslərini idarə edir.
                Tokyo Traders şirkətinin ofisi {address?.country} ölkəsində yerləşir. Dəqiq ünvan məlumatları belədir: {address?.street} küçəsində yerləşir.  Şirkətlə əlaqə saxlamaq istəyənlər, birbaşa telefon nömrəsi olan {address?.phone} vasitəsilə əlaqə qura bilərlər.
            </p>
            <SimpleLink to={'/companies'} title={"Geri"} />
            <div className='w-full'>
                <h2 className='text-start font-bold text-blue-500'>Digər Şirkətlər</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                    {
                        companies.slice(0,3).map((company)=> <CompanyCard key={company.id} {...company}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CompanyDetails