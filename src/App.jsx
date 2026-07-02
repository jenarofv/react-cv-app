import { useState } from 'react'
import './App.css'
import { ContactInfo } from './components/contactInfo.jsx'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  function handleContactInfoUpdate (event) {
    const id = event.target.id;
    switch (id) {
      case "firstNameInput":
        setFirstName(event.target.value);
        break;
      case "lastNameInput":
        setLastName(event.target.value);
        break;
      case "telephoneInput":
        const value = event.target.value;
        const numeric = /^[0-9]+*$/;
      //   if (numeric.test(value)) {
      //     console.log(numeric.test(value));
      //     setTelephoneNumber(value);
      //   } else {
      //     console.log(value.match(numeric));
      //   }
      //   // if (value.match(/^[0-9]*$/)) {
      //   // } else {
      //   //   throw new TypeError (`${value} does not match` );
      //   // }
        break;
    }
  }

  return (
    <>
      <div>
        <h1>CV Creator</h1>
      </div>
      <ContactInfo
        firstName={firstName}
        lastName={lastName}
        tel={telephoneNumber}
        email={emailAddress}
        onChange={handleContactInfoUpdate}
      />
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
