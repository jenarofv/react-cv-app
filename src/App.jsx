import { useState } from "react";
import "./App.css";
import { ContactInfo } from "./components/contactInfo.jsx";
import { EducationInput, EducationOutput } from "./components/education.jsx";
import { addEntry } from "./functions/handleEducationUpdate.jsx";
import { getDate } from "./functions/renderDate.js";
import {
  ProfessionalExperience,
  ProfessionalExperienceOutput,
} from "./components/experience.jsx";
import { OutputContactInfo } from "./components/Output.jsx";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  function editEntry(event) {
    const entry = event.target.parentElement;
    const header = entry.firstElementChild;
    const place = header.firstElementChild.innerText;
    const title = entry.childNodes[1].firstElementChild.innerText;
    const description = entry.childNodes[1].childNodes[1].innerText;
    let dates;
    if (entry.classList.contains("education-output")) {
      dates = getDate(header.childNodes[1].innerText);
    } else {
      // add start date and end date.
      dates = [
        getDate(header.lastElementChild.firstElementChild.innerText),
        getDate(header.lastElementChild.lastElementChild.innerText),
      ];
    }
    console.log(dates);
  }

  function handleContactInfoUpdate(event) {
    const id = event.target.id;
    const target = event.target;
    const value = event.target.value;
    const lastChar = value.charAt(value.length - 1);
    const emailRegexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    switch (id) {
      case "firstNameInput":
        setFirstName(value);
        break;
      case "lastNameInput":
        setLastName(value);
        break;
      case "telephoneInput":
        if (event.nativeEvent.inputType === "deleteContentBackward") {
          setTelephoneNumber(value);
          return;
        }
        if (!lastChar.match(/^[0-9]$/)) {
          throw new TypeError(`${lastChar} is not a number`);
        }
        if ([4, 8].includes(value.length)) {
          setTelephoneNumber(value.slice(0, value.length - 1) + "-" + lastChar);
        } else {
          setTelephoneNumber(value);
        }
        break;
      case "emailInput":
        setEmailAddress(value);
        if (!value.match(emailRegexp)) {
          target.classList.add("invalid-email");
        } else {
          target.classList.remove("invalid-email");
          target.classList.add("valid-email");
        }
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
      <hr />
      <EducationInput onChange={addEntry(educationData, setEducationData)} />
      <hr />
      <ProfessionalExperience
        onChange={addEntry(experienceData, setExperienceData)}
      />
      <hr />
      <h2> Output CV </h2>
      <OutputContactInfo
        firstName={firstName}
        lastName={lastName}
        telephoneNumber={telephoneNumber}
        emailAddress={emailAddress}
      />
      <EducationOutput data={educationData} onEdit={editEntry} />
      <ProfessionalExperienceOutput data={experienceData} onEdit={editEntry} />
    </>
  );
}

export default App;
