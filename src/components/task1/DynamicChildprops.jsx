import React, { useState } from "react";

export default function DynamicChildPros() {
  // Child Component
  function Child({ id }) {
    return (
      <div>
        <h4>Child Component {id}</h4>
      </div>
    );
  }
  // Parent Component
  const [children, setChildren] = useState([]); // State to manage child components

  const addChildren = () => {
    const newId = children.length + 1; // Calculate the next ID
    setChildren([...children, <Child key={`${newId}-1`} id={`${newId}`} />]);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={addChildren}>Add Component</button>
      <div>{children}</div>
    </div>
  );
}
