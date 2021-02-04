import React from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [category, setCategory] = React.useState("Code");
  const [text, setText] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onTaskFormSubmit({text, category})
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
