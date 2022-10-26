import React from 'react'
import './FrontPart.css'
import logo from '../../Images/ankit1.jpg'
import { BsLinkedin, BsGithub, } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { Button } from '@mui/material';

export default function FrontPart() {
    const size = {
        height: 30,
        width: 30
    }
    const s = {
        color: 'black',
        backgroundColor: 'rgb(246, 203, 11)',
        fontWeight:'600',
        textTransform:'none',
        fontSize:'1.1rem'
    }
    return (
        <div className='intro'>
            <div className='starting'>
                <p className='intro-heading'>
                    Ankit <span>Aggarwal.</span>
                </p>
                <ul className='social-links'>
                    <li><a href='https://www.linkedin.com/in/ankit-aggarwal-711ba61a0/' target="_blank"
                        rel="noopener noreferrer"><BsLinkedin style={size} /></a></li>
                    <li><a href='https://github.com/Ankit27Agg' target="_blank"
                        rel="noopener noreferrer"><BsGithub style={size} /></a></li>
                    <li><a href='https://leetcode.com/indian_comrade/' target="_blank"
                        rel="noopener noreferrer"><SiLeetcode style={size} /></a></li>
                </ul>
            </div>

            <div className='intro-part'>
                <img alt="pic" src={logo} />
                <h3 className='intro-role'>
                    FRONTEND DEVELOPER
                </h3>
                <p className='intro-description'>
                    I'm a Final year engineering student at Maharaja Agrasen Institute of Technology(MAIT),

                    New Delhi.
                    I love to make responsive projects using my Tech Stack.
                </p>
            </div>
            <div className='connect'>
                <a href='https://www.linkedin.com/in/ankit-aggarwal-711ba61a0/'
                target="_blank"
                rel="noopener noreferrer" className='connect-button'>
                {/* Let's Connect */}
            
                <Button style={s} variant="contained" href="https://www.linkedin.com/in/ankit-aggarwal-711ba61a0/">
                    Let's Connect
                </Button></a>
            </div>
        </div>
    )
}
