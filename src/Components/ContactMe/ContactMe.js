import React from 'react'
import './ContactMe.css'
// import minion from '../../Images/minion.gif'
import { Button } from '@mui/material'
const ContactMe = () => {
    const styling = {
        background: 'black',
        border: '2px solid rgb(246, 203, 11)'
    }
    return (
        <div className='contact' id='contact-me'>
            <p className='contact-heading'>Contact Me</p>
            <div className='form-parent'>
                <div className='form'>
                    <div className='form-left-parent'>
                    <div className='form-left'>
                        <p className='form-left-heading' dataContent='Get in Touch.'>Get in Touch.</p>
                        <div className='contact-details'>
                            <p>
                                New Delhi, India
                            </p>
                            <a href='mailto: worltresting@gmail.com'>
                                worltresting@gmail.com
                            </a>
                            <div className='cv'>
                                <a href='https://docs.google.com/document/d/1PumEu2nbKvNyB_1Al5RWYmSki2DM3IQk/
            edit?usp=sharing&ouid=105663189767640127668&rtpof=true&sd=true'
                                    target="_blank"
                                    rel="noopener noreferrer"><Button variant="outlined" disableRipple>Resume</Button></a>
                            </div>
                        </div>
                        <div className='minion'>

                        </div>
                    </div>
                    </div>
                    <div className='form-right-parent'>


                        <div className='form-right'>
                            <form>
                                <label htmlFor='name'>Name</label>
                                <input type='text' name='name' id='name' required></input>
                                <label htmlFor='email'>Email</label>
                                <input type='email' name='email' id='email' required></input>
                                <label htmlFor='message'>Message</label>
                                <textarea name='message' id='message' cols='25' rows='5' required></textarea>
                                <div className='form-btn'>
                                    <Button sx={styling} type='submit' variant="contained">
                                        Send
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ContactMe