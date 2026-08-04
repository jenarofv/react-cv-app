export function renderDate(dateString) {
  if (dateString === "") {
    return;
  }
  const monthNumber = Number(dateString.slice(5, 7)) - 1;
  const yearString = dateString.slice(0, 4);
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
  return `${months[monthNumber]} ${yearString}`;
}
