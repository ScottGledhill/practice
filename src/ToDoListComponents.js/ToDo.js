import React from "react";

export default props => (
  <div
    style={{
      textDecoration: props.todo.complete ? "line-through" : ""
    }}
    onClick={props.toggleComplete}>
    {props.todo.text}
    <button
      className="btn btn-danger btn-sm m-2"
      onClick={props.onDelete}>
      Delete
    </button>
  </div>
);