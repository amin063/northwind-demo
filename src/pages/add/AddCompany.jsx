import React, { useState } from 'react'
import { FaBuilding, FaRoad } from "react-icons/fa";
import { FaEarthEurope, FaSquarePhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import { companyServices } from '../../services/CompanyServices';

function AddCompany() {
    const [formData, setFormData] = useState({});


    const inputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'country' || name === 'street' || name === 'phone') {
            setFormData({
                ...formData, address: {
                    ...formData.address,
                    [name]: value
                }
            })
        } else {
            setFormData({ ...formData, [name]: value })
        }
    }

    const addCompany = (e) => {
        e.preventDefault()
        companyServices.addCompany(formData)
    }

    const inputList = [
        { name: "companyName", icon: <FaBuilding />, placeholder: 'Company' },
        { name: "contactName", icon: <IoPerson />, placeholder: 'Name' },
        { name: "contactTitle", icon: <MdWork />, placeholder: 'Position' },
        { name: "country", icon: <FaEarthEurope />, placeholder: 'Country' },
        { name: "street", icon: <FaRoad />, placeholder: 'Street' },
        { name: "phone", icon: <FaSquarePhone />, placeholder: 'Phone' }
    ]
    console.log(formData);

    return (
        <div className='my-14 w-[90%] m-auto'>
            <h1 className='text-center font-bold text-2xl'>Şirkətini Qur</h1>
            <form onSubmit={addCompany} className='flex flex-col justify-center gap-5 items-center'>
                <div className='flex flex-col gap-14 sm:flex-row'>
                    <div>
                        {inputList.slice(0, 3).map((item, index) => <Input key={index} name={item.name} icon={item.icon} placeholder={item.placeholder} func={inputChange} />)}
                    </div>
                    <div>
                        {inputList.slice(3, 6).map((item, index) => <Input key={index} name={item.name} icon={item.icon} placeholder={item.placeholder} func={inputChange} />)}
                    </div>
                </div>
                <input type="submit" value={"Təsdiqlə"} className='bg-blue-600 text-white border-none px-3 py-2 rounded-sm' />
            </form>
            <div>
            </div>
        </div>
    )
}

export default AddCompany



function Input({ name, icon, func, placeholder }) {
    return (
        <div className='flex items-center h-[40px] my-5'>
            <div className='h-full bg-blue-600 flex justify-center items-center p-3 text-white'>
                {icon}
            </div>
            <input
                name={name}
                onChange={func}
                className='h-full border border-blue-600 p-2'
                type="text"
                placeholder={placeholder} />
        </div>
    )
}

