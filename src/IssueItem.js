import React from "react";

function IssueItem({ issue }) {
  return (
    <div className="issue-card">
      <h3>{issue.title}</h3>
      <p>Priority: {issue.priority}</p>
    </div>
  );
}

export default IssueItem;
