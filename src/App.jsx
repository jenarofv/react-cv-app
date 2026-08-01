import { useState } from "react";
import "./App.css";
import { ContactInfo } from "./components/contactInfo.jsx";
import { Education } from "./components/education.jsx";
import { ProfessionalExperience } from "./components/experience.jsx";

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
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyYear, setStudyYear] = useState(today);
  const [studyDescription, setStudyDescription] = useState("");
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

  function handleEducationUpdate(event) {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    const functions = {
      schoolName: setSchoolName,
      studyTitle: setStudyTitle,
      studyYear: setStudyYear,
      studyDescription: setStudyDescription,
    };
    functions[id](value);
  }

  function submitContactInfo() {}

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
      <Education
        schoolName={schoolName}
        studyTitle={studyTitle}
        studyYear={studyYear}
        studyDescription={studyDescription}
        onChange={handleEducationUpdate}
      />
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
    </>
  );
}

export default App;
