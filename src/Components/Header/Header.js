import React from 'react'
import './Header.css'
import Button from '@mui/material/Button';
import menuOpen from '../../Images/menu-open.png'
import menuClose from '../../Images/menu-close.png'
export default function Header() {

  // const mobileBtn = document.querySelector(".mobile-icons");
  // const header = document.querySelector('.header');
  // const menu = document.querySelector(".menu");
  
  const h = document.getElementsByClassName('header');
  const toggleBtn = (e) => {
    console.log(h[0])
    h[0].classList.toggle("active")
    
  }
  const removeBtn = () => {
    h[0].classList.remove("active")
  }
  // mobileBtn.addEventListener("click", ()=>{toggleBtn()})

  const size = {
    textTransform: 'none',
    color: 'white',
    borderColor: 'white'
  }
  return (
    <div className='header' >
      <div className='logo'>
        <h2>meri<span>Phechan</span> </h2>
      </div>
      <ul className='menu ' onClick={removeBtn}>
        <li><a href='#projects' className='menu-a'>Projects</a></li>
        <li ><a href='#education' className='menu-a'>Education</a></li>
        <li><a href='#skills' className='menu-a'>Skills</a></li>
        <li><a href='#contact-me' className='menu-a'>Contact Me</a></li>
      </ul>
      <div className='cv-button'>
        <a href='https://drive.google.com/file/d/1-eIWHbXM1nCrZ5m5hOOlSBgQrFk3fHoE/view?usp=sharing'
          target="_blank"
          rel="noopener noreferrer"><Button style={size} variant="outlined" disableRipple>Download CV</Button></a>
      </div>
      <div className='mobile-icons' onClick={toggleBtn}>
        <img alt="pic" src={menuOpen} name='open'></img>
        <img alt="pic" src={menuClose} name='close'></img>
      </div>

    </div>
  )
}
