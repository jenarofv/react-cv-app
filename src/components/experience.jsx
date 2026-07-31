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
            Company
            <input id="companyName" value={companyName} onChange={onChange} />
          </label>
        </div>
        <div>
          <label>
            Job Title
            <input id="jobTitle" value={jobTitle} onChange={onChange} />
          </label>
        </div>
        <div>
          <label>
            Start date
            <input id="startDate" value={startDate} onChange={onChange} />
          </label>
        </div>
        <div>
          <label>
            End date
            <input id="endDate" value={endDate} onChange={onChange} />
          </label>
        </div>
        <div>
          <label htmlFor="jobDescription">
            Comment/Description
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
