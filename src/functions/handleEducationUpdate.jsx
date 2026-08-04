export function addEntry(state, setState) {
  return (event) => {
    event.preventDefault();
    const nodes = event.target.previousElementSibling.childNodes;
    const newStateEntry = {};
    for (const div of nodes) {
      const inputNode = div.firstElementChild.firstElementChild;
      if (inputNode.value === "") {
        return;
      }
      newStateEntry[inputNode.id] = inputNode.value;
      inputNode.value = "";
    }
    setState([...state, newStateEntry]);
  };
}
