import "../styles/styles.css";

export function Education({
  schoolName,
  studyTitle,
  studyYear,
  studyDescription,
  onChange,
}) {
  return (
    <div className="input-container">
      <h2>Education</h2>
      <div className="input-section">
        <div>
          <label>
            School Name:&nbsp;
            <input id="schoolName" value={schoolName} onChange={onChange} />
          </label>
        </div>
        <div>
          <label>
            Title:&nbsp;
            <input id="studyTitle" value={studyTitle} onChange={onChange} />
          </label>
        </div>
        <div>
          <label>
            Year:&nbsp;
            <input
              type="date"
              id="studyYear"
              value={studyYear}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="studyDescription">
            Comment/Description:&nbsp;
            <textarea
              id="studyDescription"
              value={studyDescription}
              onChange={onChange}
              maxLength="500"
            />
          </label>
        </div>
      </div>
      <button> add info </button>
    </div>
  );
}
