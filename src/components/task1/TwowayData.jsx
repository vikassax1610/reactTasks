import { useState } from "react";

export default function TwowayData() {
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          placeholder="Type Something"
          onChange={(e) => setText(e.target.value)}
        />
        <p>You Typed : {text}</p>
      </div>
    </>
  );
}
