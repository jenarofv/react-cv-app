import "../styles/styles.css";

export function OutputContactInfo({
  firstName,
  lastName,
  telephoneNumber,
  emailAddress,
}) {
  const telephoneString =
    telephoneNumber.length > 0 ? `Telephone: ${telephoneNumber}` : "";
  return (
    <>
      <h2>{`${firstName !== "" ? firstName : ""} ${lastName}`}</h2>
      <div className="phone-email-container">
        <h3>{telephoneString}</h3>
        <h3>
          <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </h3>
      </div>
    </>
  );
}
