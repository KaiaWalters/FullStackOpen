import { useState } from 'react'
import {useEffect} from 'react'
import Switch from '@mui/joy/Switch';
import Section from './components/Section';
import Grid2 from '@mui/material/Grid2';
import CardContainer from './components/Card';
import * as contentList from './data/home_content_v1.json';
import './App.css'
//TODO:
// Create a request for portfolio data 
// Create a secret second route to submit portfolio data
// Dont forget to host the portfolio site once the bare minimum is complete

function App() {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    let root = document.documentElement;
    if(darkMode){
      root.style.setProperty('background-color', "black");
      root.style.setProperty('color', 'white')
    }else {
      root.style.setProperty('background-color', "white");
      root.style.setProperty('color', '#0067A5')
    } 
  }, [darkMode])
  

  return (
    <Grid2> 
      <Switch
      color={darkMode ? 'primary' : 'danger'}
      slotProps={{ input: { 'aria-label': 'dark mode' } }}
      startDecorator={<></>}
      endDecorator={<></> }
      checked={darkMode}
      onChange={(event) =>
        setDarkMode(event.target.checked)
      }
      />
      <Grid2>
        <Section headerText={contentList.sections[0]} direction='column'>
          <p>My name is Kaia, I am a software engineer who really enjoys cornmeal porridge and riding my bike </p>
        </Section>

        <Section headerText={contentList.sections[1]} direction='column'>
          <CardContainer projectList={contentList.projects}/>
        </Section>

        <Section headerText={contentList.sections[2]} direction='column'>
          <p>This is the third section.</p>
        </Section>
      </Grid2>
    </Grid2>
  )
}

export default App
