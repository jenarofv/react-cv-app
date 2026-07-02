import "../styles/styles.css";

export function ContactInfo ({firstName, lastName, tel, email, onChange}) {
  return (
    <>
      <h2>Contact Info</h2>
      <div className="inputSection">
          <label>
            First name:
            <input
              id="firstNameInput" value={firstName} onChange={onChange} />
          </label>
          <label>
            Last name:
            <input
              id="lastNameInput" value={lastName} onChange={onChange} />
          </label>
          <label>
            Telephone:
            <input type="number"
              id="telephoneInput" value={tel} onChange={onChange} />
          </label>
        </div>
    </>
  )
}
