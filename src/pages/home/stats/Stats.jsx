import React, { useEffect, useState } from 'react'
import { companyServices } from '../../../services/CompanyServices'
import { FaBuilding } from 'react-icons/fa6'
import { FaMapMarkerAlt, FaTasks } from 'react-icons/fa'
import CountUp from 'react-countup'

function Stats() {
    const [com, setCom] = useState([])
    useEffect(() => {
        companyServices.getCompanies().then((data) => setCom(data))
    }, [])

    const statsList = [
        {
            name: "Şirkətlər",
            num: com.length,
            icon: <FaBuilding className="text-3xl text-blue-500" />,
        },
        {
            name: "Fəaliyyətlərimiz",
            num: 10,
            icon: <FaTasks className="text-3xl text-green-500" />,
        },
        {
            name: "Filialarımız",
            num: 4,
            icon: <FaMapMarkerAlt className="text-3xl text-red-500" />,
        }
    ]
    return (
        <div>
            <h2 className='text-2xl font-bold text-center my-5'>Statiskamız😎</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-bold'>
                {
                    statsList.map((item, index) => (
                        <div key={index} className='h-[200px] py-5 shadow-[0px_0px_20px_1px_gray] relative group overflow-hidden'>
                            <div
                                className='rounded-full bg-gray-100 w-[90px] h-[90px] flex justify-center items-center text-lg text-white mx-auto'>
                                {item.icon}
                            </div>
                            <p className='text-3xl text-blue-500 my-2'>
                                <CountUp end={item.num} duration={5} />
                            </p>
                            <p className='mt-2'>{item.name}</p>
                            <div className='h-[200px] w-full absolute top-0 left-0 translate-y-full bg-blue-300 transition duration-500 -z-40 group-hover:translate-y-0'></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Stats