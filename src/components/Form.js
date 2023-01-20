// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
import { useState } from "react";

export default function Form({jeopardyQuest}) {
  //The component must return some JSX
  const [userInput, setUserInput] = useState("");

  const handleChange = (evt) => {
    setUserInput(evt.target.value);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userInput)
          console.log(jeopardyQuest.answer)
        }}
      >
        <span><h1>What is </h1>
        <input type="text" onChange={handleChange} value={userInput} />
        <input type="submit" value="submit" /></span>
      </form>
    </div>
  );
}