import { useState } from "react";
import "./App.css";
import { ContactInfo } from "./components/contactInfo.jsx";
import { EducationInput, EducationOutput } from "./components/education.jsx";
// import { addEntry } from "./functions/handleEducationUpdate.jsx";
import { getDate } from "./functions/renderDate.js";
import {
  ProfessionalExperience,
  ProfessionalExperienceOutput,
} from "./components/experience.jsx";
import { OutputContactInfo } from "./components/Output.jsx";

function App() {
  let numOfEntry = undefined;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [educationData, setEducationData] = useState([]);
  let educationKey = 0;
  let experienceKey = 0;
  // const [experienceKey, setexperienceKey] = useState(0);
  const [experienceData, setExperienceData] = useState([]);

  function addEntry(state, setState, numOfEntry) {
    return (event) => {
      event.preventDefault();
      const nodes = event.target.previousElementSibling.childNodes;
      const newStateEntry = {};
      for (const div of nodes) {
        const inputNode = div.firstElementChild.firstElementChild;
        if (inputNode.value === "") {
          return;
        }
        newStateEntry[inputNode.id] = inputNode.value;
        inputNode.value = "";
      }
      newStateEntry["key"] = educationKey++;
      if (numOfEntry !== undefined) {
        setState([
          ...state.slice(0, numOfEntry),
          newStateEntry,
          ...state.slice(numOfEntry + 1),
        ]);
        numOfEntry = undefined;
      } else {
        setState([...state, newStateEntry]);
      }
    };
  }

  function editEntry(key) {
    return (event) => {
      const entry = educationData[key];
      console.log(entry);
      numOfEntry = entry.key;
      // display education info in EducationInput
      const schoolName = document.getElementById("schoolName");
      const title = document.getElementById("studyTitle");
      const description = document.getElementById("studyDescription");
      const year = document.getElementById("studyYear");
      schoolName.value = entry.schoolName;
      title.value = entry.schoolName;
      description.value = entry.studyDescription;
      year.value = entry.studyYear;
      return;
    };
  }

  function deleteEntry(state, setState, key) {
    return (key) => {
      // should remove entry from educationData or experienceData
      const newState = state.filter((entry) => entry.key !== key);
      setState(newState);
    };
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
      <EducationOutput
        data={educationData}
        onEdit={editEntry}
        onDelete={deleteEntry(educationData, setEducationData)}
      />
      <ProfessionalExperienceOutput data={experienceData} onEdit={editEntry} />
    </>
  );
}

export default App;
