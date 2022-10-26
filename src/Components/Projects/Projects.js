import { Button, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import './Projects.css'
import imdb from '../../Images/imdb.jpg'
import file from '../../Images/file.png'
import food from '../../Images/food.jpg'
import expense from '../../Images/expense.webp'
import ankit from '../../Images/ankit2.jpg'
import html from '../../Images/html-flat.png';
import css from '../../Images/css.png';
import js from '../../Images/js.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
    backgroundColor: 'rgb(246, 203, 11)',
    borderRadius: '1rem',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'

};
const s = {
    backgroundColor: 'rgba(0,0,0,0.0001)',
};

export default function Projects() {
    const [projectId, setProjectId] = useState(1);
    const [open, setOpen] = useState(false);
    const handleOpen = (e) => {
        console.log(e)
        setOpen(true)
        setProjectId(e)
    };
    const handleClose = () => setOpen(false);
    

    const arr = [
        {
            id: 1,
            icon: imdb,
            name: 'IMDb Clone App',
            codeLink: 'https://github.com/Ankit27Agg/IMDb-Clone-App',
            LiveLink: 'https://imdbclone-app.netlify.app/',
            description: ['Responsive app which has similar features of a rating app IMDb.',
             'Added skeleton loading until data is fetched completely.',
              'App shows rating, description, poster, useful links for each movie'],
            tools:[`${html}`,`${css}`,`${js}`]
        },
        {
            id: 2,
            icon: file,
            name: 'File Downloader',
            codeLink: 'https://github.com/Ankit27Agg/File-Downloader',
            LiveLink: 'https://project-28-task.netlify.app/',
            tools:[`${html}`,`${css}`],
            description: ['A web app where user can download, upload, view their files.',
             'It has login/signup feature and also user can re-login to view their content.',
              'User’s data is stored in database which can be fetched when user login to their account.']
        },
        {
            id: 3,
            icon: expense,
            name: 'Expense Tracker',
            codeLink: 'https://github.com/Ankit27Agg/Expense-Tracker',
            LiveLink: 'https://our-expenses.netlify.app/',
            tools:[`${html}`,`${css}`],
            description: ['Form which takes title, amount and date of our expense.',
             'Adds that expense to user’s expense list when form is submitted.']
        },
        {
            id: 4,
            icon: food,
            name: 'Yummy Food',
            codeLink: 'https://github.com/Ankit27Agg/Food',
            LiveLink: 'https://our-yummy-food.netlify.app/',
            tools:[`${html}`,`${css}`],
            description: ['Its a restaurant Web App. This website consists of animations, video.',
             'Single page design which shows Menu and the team of the restaurant.']
        },
        {
            id: 5,
            icon: ankit,
            name: 'Portfolio',
            codeLink: 'https://github.com/Ankit27Agg/improvised-portfolio',
            LiveLink: 'https://meri-phechan.netlify.app/',
            tools:[`${html}`,`${css}`],
            description: ['Responsive web app showing my projects, skills, education', 'Built using ReactJS along with Material UI']
        }
    ]
    return (
        <div className='project' id='projects'>

            <div className='project-heading'>
                <p>
                    PROJECTS
                </p>
            </div>
            <div className='projects'>
                {
                    arr.map((project) => {
                        return (
                            <div className='projects-card' >
                                <img src={project.icon} className='same' alt='pic'>

                                </img>
                                <p className='card-text same'>
                                    {project.name}
                                </p>
                                <div className='card-modal'>
                                    <Button onClick={()=>handleOpen(project.id)} >Know More!</Button>
                                    
                                    <Modal
                                        open={open}
                                        sx={s}
                                        className='modal'
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                        
                                    >
                                        <div className='modal-box'>
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h5" component="h2" style={{margin:'auto'}}>
                                                {arr[projectId-1].name}
                                            </Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }} className='project-desc' >
                                                1. {arr[projectId-1].description[0]}<br/>
                                                2. {arr[projectId-1].description[1]}<br/>
                                                {arr[projectId-1].description[2] ? `3. ${arr[projectId-1].description[2]}` :''}
                                            </Typography>
                                            <Typography className='modal-tech' style={{margin:'1rem 0'}}>
                                                    Tech Used:
                                                
                                                <img alt="pic" className='modal-img' src={arr[projectId-1].tools[0]}></img>
                                                <img alt="pic" className='modal-img' src={arr[projectId-1].tools[1]}></img>
                                                {arr[projectId-1].tools[2]?(<img alt="pic" className='modal-img' src={arr[projectId-1].tools[2]}></img>):''}
                                                
                                                </Typography>
                                            <Typography style={{margin:'auto'}}>
                                                <Button variant="contained" href={arr[projectId-1].codeLink} style={{marginRight:'5px', borderRadius:'1rem'}}>
                                                    Code
                                                </Button>
                                                <Button variant="contained" href={arr[projectId-1].LiveLink} style={{margin:'auto', borderRadius:'1rem', backgroundColor:'rgb(102, 13, 13)'}}>
                                                    Live
                                                </Button>
                                                </Typography>
                                                
                                        </Box>
                                        </div>
                                    </Modal>
                                    
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
