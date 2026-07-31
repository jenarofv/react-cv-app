import "../styles/styles.css";

export function Education({
  schoolName,
  studyTitle,
  studyYear,
  studyDescription,
  onChange,
}) {
  return (
    <div className="input-section">
      <h2>Education</h2>
      <label>
        School Name
        <input id="schoolName" value={schoolName} onChange={onChange} />
      </label>
      <label>
        Title
        <input id="studyTitle" value={studyTitle} onChange={onChange} />
      </label>
      <label>
        Year
        <input id="studyYear" value={studyYear} onChange={onChange} />
      </label>
      <label htmlFor="studyDescription">Comment/Description</label>
      <textarea
        id="studyDescription"
        value={studyDescription}
        onChange={onChange}
        maxLength="500"
      />
    </div>
  );
}
