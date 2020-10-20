import React, {  useEffect } from 'react'
import { useSpring, animated, useTransition } from 'react-spring'
import './Home.css'


import { Header } from '../Header/Header';
import { Comp1 } from './Comp1';
import { Footer } from '../Footer/Footer';

export const Home = () => {
    const fade = useSpring({
        from : { transform:  "translateY(200px)" },
       to : { transform:   "translateY(0px)"},
    })

    

    return (
        <div className='home' >
            <Header />
            <Comp1 />
            <Footer />
            
            
        </div>
    )
}
