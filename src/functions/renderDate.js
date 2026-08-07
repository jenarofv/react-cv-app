const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function zeroPad(number) {
  const numerAsString = number < 10 ? `0${number}` : `number`;
  return numerAsString;
}

export function renderDate(dateString) {
  if (dateString === "") {
    return;
  }
  const monthNumber = Number(dateString.slice(5, 7)) - 1;
  const yearString = dateString.slice(0, 4);
  return `${months[monthNumber]} ${yearString}`;
}

export function getDate(dateString) {
  if (dateString === "") {
    return;
  }
  const monthName = dateString.slice(0, 3);
  const yearString = dateString.slice(4, 8);
  const monthNumber = zeroPad(months.indexOf(monthName) + 1);
  return `${yearString}-${monthNumber}-01`;
}
