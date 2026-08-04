import { getDate } from "../functions/renderDate.js";
export function deleteEntry(event) {
  event.target.parentElement.remove();
}

export function editEntry(event) {
  const entry = event.target.parentElement;
  const header = entry.firstElementChild;
  const place = header.firstElementChild.innerText;
  const title = entry.childNodes[1].firstElementChild.innerText;
  const description = entry.childNodes[1].childNodes[1].innerText;
  let dates;
  if (entry.classList.contains("education-output")) {
    dates = getDate(header.childNodes[1].innerText);
  } else {
    dates = [];
  }
  console.log(place);
  console.log(title);
  console.log(description);
  console.log(dates);
}
