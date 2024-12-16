import React from 'react'
import SimpleLink from '../../../components/buttons/SimpleLink'

function Tutorial() {
    const tutorial = [
        {
            title: '1. Saytımıza daxil olun',
            content: 'Saytınızın üstündeki "daxil ol" düyməsinin üstündeki şəkilə baxın və "daxil ol" düyməsini basın.'
        },
        {
            title: '2. Məlumatlarınız daxil edin',
            content: 'Açılan formda bütün məlumatlarınızı qeyd edin və təsdiqləyin.'
        },
        {
            title: '3. Təsdiq gözləyin',
            content: 'Tez bir zamanda sizin müracitinizi təsdiqləyəcəyik. Səbr işin yarısıdır😉'
        }

    ]
    return (
        <div>
            <h2 className='text-2xl font-bold text-center my-5'>Necə Ən Yaxşı Şirkət Yarada Bilərəm😭</h2>
            <div className='flex flex-col gap-7 mb-5'>
                {
                    tutorial.map((item, index) => {
                        return (
                            <div className=' bg-blue-100 p-5 hover:bg-blue-500 hover:text-white transition duration-300 hover:shadow-[4px_4px_5px_5px_black]' key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex justify-center items-center'>
            <SimpleLink to={'/add'} title={"Başla"}/>
            </div>
        </div>
    )
}

export default Tutorial