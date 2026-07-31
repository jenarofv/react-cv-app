import "../styles/styles.css";

export function ContactInfo({ firstName, lastName, tel, email, onChange }) {
  return (
    <>
      <h2>Contact Info</h2>
      <div className="inputSection">
        <div>
          <label>
            First name:
            <input id="firstNameInput" value={firstName} onChange={onChange} />
          </label>
        </div>
        <div>
          <label>
            Last name:
            <input id="lastNameInput" value={lastName} onChange={onChange} />
          </label>
        </div>
        <div>
          <label>
            Telephone:
            <input
              type="tel"
              id="telephoneInput"
              value={tel}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="text"
              id="emailInput"
              value={email}
              onChange={onChange}
            />
          </label>
        </div>
      </div>
    </>
  );
}
