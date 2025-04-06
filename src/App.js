import React, { useState } from "react";
import IssueList from "./IssueList";
import NewIssueForm from "./NewIssueForm";

function App() {
  const [issues, setIssues] = useState([
    { id: 1, title: "Bug in login", priority: "High" },
    { id: 2, title: "UI glitch on dashboard", priority: "Medium" },
  ]);

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <NewIssueForm setIssues={setIssues} />
      <IssueList issues={issues} />
    </div>
  );
}
export default App;
