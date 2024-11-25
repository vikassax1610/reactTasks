import { useState } from "react";

export default function SumoftwoNum() {
  const [text1, setText1] = useState(0);
  const [text2, setText2] = useState(0);

  return (
    <div>
      <input
        type="text"
        value={text1}
        onChange={(e) => setText1(parseInt(e.target.value))}
        placeholder="enter one number"
      />
      <input
        type="text"
        value={text2}
        onChange={(e) => setText2(parseInt(e.target.value))}
        placeholder="enter second number"
      />
      <h3>{text1 + text2}</h3>;
    </div>
  );
}
