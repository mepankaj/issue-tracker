import React, { useState } from "react";

function NewIssueForm({ setIssues }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIssues((prev) => [
      ...prev,
      { id: Date.now(), title, priority },
    ]);
    setTitle("");
    setPriority("Low");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Issue Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Add Issue</button>
    </form>
  );
}
export default NewIssueForm;
