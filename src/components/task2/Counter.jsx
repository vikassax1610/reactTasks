import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleClickInc() {
    setCount(count + 1);
  }
  function handleClickdec() {
    setCount(count - 1);
  }
  return (
    <>
      <button onClick={handleClickInc}>Increment</button>
      <button onClick={handleClickdec}>Increment</button>
      <h4>Count: {count}</h4>
    </>
  );
}
