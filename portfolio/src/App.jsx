import { useState } from 'react'
import Switch from '@mui/joy/Switch';

import './App.css'

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
      <h1>Hello, world!</h1>

    </div>
  )
}

export default App
