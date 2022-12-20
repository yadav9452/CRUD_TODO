import { useState } from "react";

function AddTodo({ handleAddTodo }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  const onClick = () => {
    handleAddTodo(text);
    setText("");
  };
  // console.log("whole text:", text);

  return (
    <div>
      <input value={text} type="text" onChange={handleChange} />
      <button onClick={onClick}>ADD</button>
    </div>
  );
}

export default AddTodo;
