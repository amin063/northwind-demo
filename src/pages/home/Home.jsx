import React from 'react'
import Intro from './intro/Intro'
import Recomendation from './recomendation/Recomendation'
import Stats from './stats/Stats'
import Tutorial from './tutorial/Tutorial'

function Home() {
    return (
        <div className='flex flex-col w-[85%] m-auto gap-10'>
            <Intro />
            <Recomendation />
            <Stats />
            <Tutorial/>
        </div>
    )
}

export default Home