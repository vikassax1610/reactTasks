import { useState } from "react";

export default function ShowHide() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <button onClick={() => setIsVisible(true)}>Show</button>
      <button onClick={() => setIsVisible(false)}>Hide</button>
      {isVisible && <h1>hello everyone</h1>}
    </>
  );
}
