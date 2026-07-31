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
    <>
      <h2>Professional Experience</h2>
      <div className="input-section">
        <label>
          Company
          <input id="companyName" value={companyName} onChange={onChange} />
        </label>
        <label>
          Job Title
          <input id="jobTitle" value={jobTitle} onChange={onChange} />
        </label>
        <label>
          Start date
          <input id="startDate" value={startDate} onChange={onChange} />
        </label>
        <label>
          End date
          <input id="endDate" value={endDate} onChange={onChange} />
        </label>
        <label htmlFor="studyDescription">Comment/Description</label>
        <textarea
          id="jobDescription"
          value={jobDescription}
          onChange={onChange}
          maxLength="500"
        />
      </div>
    </>
  );
}
