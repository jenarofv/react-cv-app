import "../styles/styles.css";

export function OutputContactInfo({
  firstName,
  lastName,
  telephoneNumber,
  emailAddress,
}) {
  return (
    <>
      <h2>{`${firstName !== "" ? firstName : ""} ${lastName}`}</h2>
      <div className="phone-email-container">
        <h3>
          {telephoneNumber.length > 0 ? `Telephone: ` : ""}
          <a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a>
        </h3>
        <h3>
          <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </h3>
      </div>
    </>
  );
}
