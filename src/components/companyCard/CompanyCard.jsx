import React from 'react'
import SimpleLink from '../buttons/SimpleLink'
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../redux/slices/saved.slice';
function CompanyCard({ id, companyName, contactName, contactTitle }) {
    const dispatch = useDispatch()

    const saveList = useSelector((state) => state.savedList)
    const isLike = saveList.some((item) => item.id === id)
    const saveCompany = (company) => {
        dispatch(addList(company))
    }
    return (
        <div
            className='bg-blue-100 px-5 py-2 gap-5 flex flex-col items-start rounded-md hover:text-white hover:scale-105 hover:bg-blue-500 transition duration-300 hover:shadow-[10px_10px_20px_5px_black]'>
            <p><span className='font-bold'>Company:</span> {companyName}</p>
            <p><span className='font-bold'>Contact:</span>  {contactName} </p>
            <p><span className='font-bold'>Contact:</span>  {contactTitle}</p>
            <div className='flex justify-between w-full items-center  gap-5'>
                <SimpleLink to={`/company/${id}`} title={"Details"} />
                {
                    isLike ?
                        <FaBookmark
                            className='text-xl'
                            onClick={() => saveCompany({ id, companyName, contactName, contactTitle })} />
                        :
                        <FaRegBookmark
                            className='text-xl'
                            onClick={() => saveCompany({ id, companyName, contactName, contactTitle })} />
                }
            </div>

        </div>
    )
}

export default CompanyCard