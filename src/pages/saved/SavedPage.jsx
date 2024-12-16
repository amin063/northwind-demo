import React from 'react'
import { useSelector } from 'react-redux'
import CompanyCard from '../../components/companyCard/CompanyCard';

function SavedPage() {
    const list = useSelector((state) => state.savedList)
    console.log(list);


    return (
        <div className='my-14 w-[90%] m-auto flex flex-col gap-10'>
            <h1 className='text-center font-bold text-2xl'>Saved</h1>
            {
                list.length ?
                    list.map((company) => <CompanyCard key={company.id} {...company} />)
                    :
                    <p className='text-center font-bold text-2xl text-blue-600'>Heç bir şirkəti save eləməmisən😒</p>
            }
        </div>
    )
}

export default SavedPage