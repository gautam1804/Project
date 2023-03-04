import React from 'react';
import backgroundCSS from '../css/Background.css'
import bgImage from '../video/smoke.mp4'

export default function Background() {
    return (
        <>
            <section className='sction'>
                <h2 className='hh2'>Xception 4.0</h2>
                <video autoPlay loop muted className='vdeo'>
                    <source src={bgImage} type="video/mp4"/>
                </video>
            </section>
        </>
    )
}