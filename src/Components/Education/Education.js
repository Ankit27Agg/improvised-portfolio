import React from 'react'
import './Education.css'

export default function Education() {
    return (
        <div className='education' id='education'>
            <p className='education-heading'>EDUCATION</p>
            <div className='education-card'>
                <div className='details'>
                    <p className='name'>
                        Maharaja Agrasen Institute Of Technology
                    </p>
                    <ul>
                        <li>BTech in ECE</li>
                        <li>CGPA - 9.2/10</li>
                        <li>Final year</li>
                    </ul>
                </div>
                <div className='year'>
                    <p className='year-text' dataContent='2023'>2023</p>
                </div>
            </div>
            <div className='education-card'>
                <div className='year'>
                <p className='year-text' dataContent='2019'>2019</p>
                </div>
                <div className='details'>
                    <p className='name'>
                        CRPF Public School
                    </p>
                    <ul>
                        <li>12th Class</li>
                        <li>77.4%</li>
                        <li>CBSE Board</li>
                    </ul>
                </div>
            </div>
            <div className='education-card'>
                <div className='details'>
                    <p className='name'>
                        Ramjas Public School
                    </p>
                    <ul>
                        <li>10th Class</li>
                        <li>CGPA - 9/10</li>
                        <li>CBSE Board</li>
                    </ul>
                </div>
                <div className='year'>
                <p className='year-text' dataContent='2017'>2017</p>
                </div>
            </div>
        </div>
    )
}
