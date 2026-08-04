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
  console.log(monthName);
  const yearString = dateString.slice(4);
  console.log(months.indexOf("Aug"));
  return `${yearString}-${months.indexOf[monthName] + 1}-01`;
}
