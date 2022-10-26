import React from 'react'
import './Skills.css'
import html from '../../Images/html-flat.png';
import css from '../../Images/css.png';
import js from '../../Images/js.png';
import bootstrap from '../../Images/bootstrap.png';
import c from '../../Images/c++.png';
// import {images} from '../../Images';
export default function Skills() {

    const techStack = [
        {
            id:1,
            name:'HTML',
            icon: html,
        },
        {
            id:2,
            name:'CSS',
            icon: css
        },
        {
            id:3,
            name:'Javascript',
            icon: js
        },
        {
            id:4,
            name:'Bootstrap',
            icon: bootstrap
        },
        {
            id:5,
            name:'C/C++',
            icon: c
        }
    ]

  return (
    <div className='skills' id='skills' >
        <div className='skills-heading'>
            Skills
        </div>
        <div className='skills-card'>
        {
            techStack.map((tech)=>{
                return(
                    <div className='skill' id={tech.id}>
                        <img alt="pic" src={tech.icon}></img>
                        <p>
                            {tech.name}
                        </p>
                        {/* {img[tech.id]} */}
                    </div>
                )
            }
            )
        }
        </div>
        
    </div>
  )
}
