import "../styles/styles.css";

export function ProfessionalExperience({
  jobTitle,
  companyName,
  startDate,
  endDate,
  jobDescription,
  onChange,
}) {
  return (
    <div className="input-container">
      <h2>Professional Experience</h2>
      <div className="input-section">
        <div>
          <label>
            Company:&nbsp;
            <input id="companyName" value={companyName} onChange={onChange} />
          </label>
        </div>
        <div>
          <label>
            Job Title:&nbsp;
            <input id="jobTitle" value={jobTitle} onChange={onChange} />
          </label>
        </div>
        <div>
          <label>
            Start date:&nbsp;
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            End date:&nbsp;
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="jobDescription">
            Comment/Description:&nbsp;
            <textarea
              id="jobDescription"
              value={jobDescription}
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
