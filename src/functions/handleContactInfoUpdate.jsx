export function handleContactInfoUpdate(
  updateFirstName,
  updateLastName,
  updatePhone,
  updateEmail,
) {
  return (event) => {
    const id = event.target.id;
    const target = event.target;
    const value = event.target.value;
    const lastChar = value.charAt(value.length - 1);
    const emailRegexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    switch (id) {
      case "firstNameInput":
        updateFirstName(value);
        break;
      case "lastNameInput":
        updateLastName(value);
        break;
      case "telephoneInput":
        if (event.nativeEvent.inputType === "deleteContentBackward") {
          updatePhone(value);
          return;
        }
        if (!lastChar.match(/^[0-9]$/)) {
          event.target.value = value.slice(0, value.length - 1);
          throw new TypeError(`${lastChar} is not a number`);
        }
        if ([4, 8].includes(value.length)) {
          event.target.value =
            value.slice(0, value.length - 1) + "-" + lastChar;
          updatePhone(value.slice(0, value.length - 1) + "-" + lastChar);
        } else {
          updatePhone(value);
        }
        break;
      case "emailInput":
        updateEmail(value);
        if (!value.match(emailRegexp)) {
          target.classList.add("invalid-email");
        } else {
          target.classList.remove("invalid-email");
          target.classList.add("valid-email");
        }
        break;
    }
  };
}
