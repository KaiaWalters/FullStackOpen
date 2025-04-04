//2.6

import { useState } from 'react'


interface PhonebookItem {
    content: string,
    important: number,
    id: string
}

const App = () => {
  const [persons, setPersons] = useState<PhonebookItem[]>([{
    content:  "Kaia",
    important: 1234567890,
    id: "string"
  
  }]) 
  const [newName, setNewName] = useState('')

  const addNote = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault()

    const personObject = {
    content: newName,
    important: Math.random() < 0.5,
    id: String(persons.length + 1),
  }

  setPersons(persons.concat(personObject))
  setNewName('')
  }

  const handleChange = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let newName = {name: event.target.value}

    setPersons(persons.concat(newName))
    setNewName(newName.name)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input onChange={handleChange} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div style={{display:'flex',flexDirection:'column', alignContent:'space-between' }}>
        {
          persons.map(person => {
          return <span>{person.name}</span>
          })
        }
      </div>
     
     
    </div>
  )
}

export default App