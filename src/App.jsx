import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <>
      <div>
        <h1>CV Creator</h1>
      </div>
      <div>
        <h2>Contact Info</h2>
      </div>
      <div>
        <h2>Education</h2>
      </div>
      <div>
        <h2>Professional Experience</h2>
      </div>
    </>
  )
}

export default App
