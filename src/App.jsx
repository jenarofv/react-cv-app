import { useState } from "react";
import "./App.css";
import { ContactInfo } from "./components/contactInfo.jsx";
import { Education } from "./components/education.jsx";
import { ProfessionalExperience } from "./components/experience.jsx";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyYear, setStudyYear] = useState("");
  const [studyDescription, setStudyDescription] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [jobDescription, setjobDescription] = useState("");

  function handleExperienceUpdate(event) {}

  function handleEducationUpdate(event) {}

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
        if ([4, 9].includes(value.length)) {
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
      <div>
        <Education
          schoolName={schoolName}
          studyTitle={studyTitle}
          studyYear={studyYear}
          studyDescription={studyDescription}
          onChange={handleEducationUpdate}
        />
      </div>
      <hr />
      <div>
        <ProfessionalExperience
          jobTitle={jobTitle}
          companyName={companyName}
          startDate={startDate}
          endDate={endDate}
          jobDescription={jobDescription}
          onChange={handleExperienceUpdate}
        />
      </div>
      <hr />
    </>
  );
}

export default App;
