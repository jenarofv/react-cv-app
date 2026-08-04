import { useState } from "react";
import "./App.css";
import { ContactInfo } from "./components/contactInfo.jsx";
import { EducationInput, EducationOutput } from "./components/education.jsx";
import { addEntry } from "./functions/handleEducationUpdate.jsx";
import { ProfessionalExperience } from "./components/experience.jsx";
import { OutputContactInfo } from "./components/Output.jsx";

function getToday() {
  const now = new Date();
  const year = now.getFullYear();
  const monthNumber = now.getMonth() + 1;
  const monthString = monthNumber < 10 ? `0${monthNumber}` : `${monthNumber}`;
  const date = now.getDate();
  const dateString = `${year}-${monthString}-${date}`;
  return dateString;
}

function App() {
  const today = getToday();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [educationData, setEducationData] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [jobDescription, setJobDescription] = useState("");

  function handleExperienceUpdate(event) {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    const functions = {
      companyName: setCompanyName,
      jobTitle: setJobTitle,
      startDate: setStartDate,
      endDate: setEndDate,
      jobDescription: setJobDescription,
    };
    functions[id](value);
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
        jobTitle={jobTitle}
        companyName={companyName}
        startDate={startDate}
        endDate={endDate}
        jobDescription={jobDescription}
        onChange={handleExperienceUpdate}
      />
      <hr />
      <h2> Output CV </h2>
      <OutputContactInfo
        firstName={firstName}
        lastName={lastName}
        telephoneNumber={telephoneNumber}
        emailAddress={emailAddress}
      />
      <EducationOutput data={educationData} />
    </>
  );
}

export default App;
