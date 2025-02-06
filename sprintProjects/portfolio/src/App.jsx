import { useState } from 'react'
import Switch from '@mui/joy/Switch';
import Section from './components/Section';

import './App.css'

// Create a request for portfolio data 
// Create a secret second route to submit portfolio data
// Dont forget to host the portfolio site once the bare minimum is complete

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div style={darkMode ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }}> 
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

      <Section headerText="About Me">
        <p>This is the first section.</p>
      </Section>

      <Section headerText="Projects">
      </Section>

      <Section headerText="Contact">
      </Section>
    </div>
  )
}

export default App
