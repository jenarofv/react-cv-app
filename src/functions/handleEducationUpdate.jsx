export function addEducationEntry(state, setState) {
  return (event) => {
    event.preventDefault();
    const nodes = event.target.previousElementSibling.childNodes;
    const newEducationEntry = {};
    for (const div of nodes) {
      if (div.firstElementChild.firstElementChild.value === "") {
        return;
      }
      newEducationEntry[div.firstElementChild.firstElementChild.id] =
        div.firstElementChild.firstElementChild.value;
    }
    console.log(newEducationEntry);
    setState([...state, newEducationEntry]);
    console.log(state);
  };
}
