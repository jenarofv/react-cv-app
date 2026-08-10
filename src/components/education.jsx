import "../styles/styles.css";
import { renderDate } from "../functions/renderDate.js";
import { deleteEntry } from "../functions/modifyEntry.js";

export function EducationInput({ onChange }) {
  return (
    <form className="input-container">
      <h2>Education</h2>
      <div className="input-section">
        <div>
          <label>
            School Name:&nbsp;
            <input id="schoolName" />
          </label>
        </div>
        <div>
          <label>
            Title:&nbsp;
            <input id="studyTitle" />
          </label>
        </div>
        <div>
          <label>
            Year:&nbsp;
            <input type="date" id="studyYear" />
          </label>
        </div>
        <div>
          <label>
            Comment/Description:&nbsp;
            <textarea id="studyDescription" maxLength="500" />
          </label>
        </div>
      </div>
      <button onClick={onChange}> add info </button>
    </form>
  );
}

export function EducationOutput({ data, onEdit }) {
  const educationDisplay = data.map((entry) => (
    <div className="education-output" key={entry.key}>
      <header>
        <h3> {entry.schoolName} </h3>
        <h3> {renderDate(entry.studyYear)} </h3>
      </header>
      <section>
        <h3> {entry.studyTitle} </h3>
        <p> {entry.studyDescription}</p>
      </section>
      <button onClick={onEdit}> edit </button>
      <button onClick={deleteEntry}> delete </button>
    </div>
  ));
  return (
    <div className="output">
      <h2> Education </h2>
      {educationDisplay}
    </div>
  );
}
