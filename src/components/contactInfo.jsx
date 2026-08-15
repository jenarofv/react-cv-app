import "../styles/styles.css";

export function ContactInfo({ onChange }) {
  return (
    <div className="input-container">
      <h2>Contact Info</h2>
      <div className="input-section">
        <div>
          <label>
            First name:
            <input id="firstNameInput" onChange={onChange} />
          </label>
        </div>
        <div>
          <label>
            Last name:
            <input id="lastNameInput" onChange={onChange} />
          </label>
        </div>
        <div>
          <label>
            Telephone:
            <input type="tel" id="telephoneInput" onChange={onChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="text" id="emailInput" onChange={onChange} />
          </label>
        </div>
      </div>
    </div>
  );
}
