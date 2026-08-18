import "../styles/styles.css";
import { renderDate } from "../functions/renderDate.js";
// import { deleteEntry } from "../functions/modifyEntry.js";

export function ExperienceInput({ onChange }) {
  return (
    <div className="input-container">
      <h2>Professional Experience</h2>
      <div className="input-section">
        <div>
          <label>
            Company:&nbsp;
            <input id="companyName" />
          </label>
        </div>
        <div>
          <label>
            Job Title:&nbsp;
            <input id="jobTitle" />
          </label>
        </div>
        <div>
          <label>
            Start date:&nbsp;
            <input type="date" id="startDate" />
          </label>
        </div>
        <div>
          <label>
            End date:&nbsp;
            <input type="date" id="endDate" />
          </label>
        </div>
        <div>
          <label htmlFor="jobDescription">
            Comment/Description:&nbsp;
            <textarea id="jobDescription" maxLength="500" />
          </label>
        </div>
      </div>
      <button onClick={onChange}> add info </button>
    </div>
  );
}

export function ExperienceOutput({ data, onEdit, onDelete }) {
  const experienceDisplay = data.map((entry, index) => (
    <div className="experience-output" key={index}>
      <header>
        <h3> {entry.companyName} </h3>
        <div className="years">
          <h3> {renderDate(entry.startDate)} </h3> &mdash;{" "}
          <h3> {renderDate(entry.endDate)} </h3>
        </div>
      </header>
      <section>
        <h3> {entry.jobTitle} </h3>
        <p> {entry.jobDescription}</p>
      </section>
      <button onClick={onEdit(entry.key)}> edit </button>
      <button onClick={onDelete(entry.key)}> delete </button>
    </div>
  ));
  return (
    <div className="output">
      <h2> Professional Experience </h2>
      {experienceDisplay}
    </div>
  );
}
