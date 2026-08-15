import { useState } from "react";
import "./App.css";
import { ContactInfo } from "./components/contactInfo.jsx";
import { EducationInput, EducationOutput } from "./components/education.jsx";
import { handleContactInfoUpdate } from "./functions/handleContactInfoUpdate.jsx";
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
  // const [experienceKey, setexperienceKey] = useState(0);

  function addEntry(state, setState) {
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

  return (
    <>
      <div>
        <h1>CV Creator</h1>
      </div>
      <ContactInfo
        onChange={handleContactInfoUpdate(
          setFirstName,
          setLastName,
          setTelephoneNumber,
          setEmailAddress,
        )}
      />
      <hr />
      <EducationInput onChange={addEntry(educationData, setEducationData)} />
      <hr />
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
    </>
  );
}

export default App;
