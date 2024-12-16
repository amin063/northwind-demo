import React from 'react'
import introjpeg from '../../../assets/intro.jpeg'
import SimpleLink from '../../../components/buttons/SimpleLink'
function Intro() {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center'>
        <img className='absolute top-0 left-0 w-full h-full -z-20  object-cover bg-center bg-no-repeat' src={introjpeg} alt="" />
        <div className='h-full w-full bg-black top-0 left-0 absolute -z-10 opacity-50 '></div>
        <div className='relative z-10 text-white w-[100%] md:w-[70%]'>
            <h1 className='text-3xl sm:text-4xl font-bold'>Ən Yaxşı Şirkətlərin Məkanı</h1>
            <p className='my-5'>Biz ən yaxşı və özünə inan insanlarla işləyirik. Əgər səndə bunlar yoxdusa ctrl + w bas. Əgər hələ burdasansa aşağıdan şirkətini yarada bilərsən</p>
            <SimpleLink to={'/add'} title={"Şirkətini Qur"}/>
        </div>
    </div>
  )
}

export default Intro