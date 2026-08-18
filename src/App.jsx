import { useState } from "react";
import "./App.css";
import { ContactInfo } from "./components/contactInfo.jsx";
import { EducationInput, EducationOutput } from "./components/education.jsx";
import { handleContactInfoUpdate } from "./functions/handleContactInfoUpdate.jsx";
import { getEntry } from "./functions/getEntry.jsx";
// import {
//   ProfessionalExperience,
//   ProfessionalExperienceOutput,
// } from "./components/experience.jsx";
import { OutputContactInfo } from "./components/Output.jsx";

function App() {
  const [modKey, setModKey] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [educationData, setEducationData] = useState([]);
  let educationKey = 0;
  // const [experienceKey, setexperienceKey] = useState(0);

  function addEntry(state, setState) {
    return (event) => {
      const newEntry = getEntry(event);
      console.log(newEntry);
      let newState;
      let others;
      console.log("adding entry...");
      if (modKey === undefined) {
        console.log("adding NEW entry...");
        newEntry.key = educationKey++;
        newState = [...state, newEntry];
      } else {
        console.log(`editing entry ${modKey}...`);
        newEntry.key = educationKey++;
        others = state.filter((entry) => entry.key !== modKey);
        newEntry.key = modKey;
        newState = [...others, newEntry];
      }
      console.log("setting state");
      console.log(newState);
      setState(newState);
    };
  }

  function editEntry(state) {
    return (key) => {
      return () => {
        const entry = state[key];
        setModKey(entry.key);
        // display education info in EducationInput
        const schoolName = document.getElementById("schoolName");
        const title = document.getElementById("studyTitle");
        const description = document.getElementById("studyDescription");
        const year = document.getElementById("studyYear");
        schoolName.value = entry.schoolName;
        title.value = entry.studyTitle;
        description.value = entry.studyDescription;
        year.value = entry.studyYear;
      };
    };
  }

  function deleteEntry(state, setState) {
    return (key) => {
      return () => {
        // should remove entry from educationData or experienceData
        const newState = state.filter((entry) => entry.key !== key);
        setState(newState);
      };
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
        onEdit={editEntry(educationData)}
        onDelete={deleteEntry(educationData, setEducationData)}
      />
    </>
  );
}

export default App;
