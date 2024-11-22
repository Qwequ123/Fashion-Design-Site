import React from 'react'
import { Hero, HeroSlider } from './components'

const Home = (props) => {
    return (
        <div className='h-auto'>
            <HeroSlider />
            <div>
                <Hero pins={props.pins} />
            </div>
        </div>
    )
}

export default Home;