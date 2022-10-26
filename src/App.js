import FrontPart from './Components/FrontPart/FrontPart';
import Header from './Components/Header/Header';
import './App.css'
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';
import { useEffect, useState } from 'react';
import ArrowUp from './Images/arrowUp.jpg'
import ContactMe from './Components/ContactMe/ContactMe';
// import { CssBaseline, ScopedCssBaseline } from '@mui/material';

function App() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {

    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > 100) {
        setBackToTop(true)
      }
      else {
        setBackToTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }



  return (
    <div className="App" >
      {/* <ScopedCssBaseline> */}
      <div className='same-bg'>
        <Header />
        <FrontPart />
      </div>
      {/* <CssBaseline /> */}
      <Projects />
      <Education />
      <Skills />
      <ContactMe />
      {
        backToTop && (
          <button onClick={scrollUp} className='top-btn'><img src={ArrowUp} alt='top' /></button>
        )
      }
      {/* </ScopedCssBaseline> */}
    </div>
  );
}

export default App;
