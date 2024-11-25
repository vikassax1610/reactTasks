import { useState } from "react";

export default function SumoftwoNum() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleChange1 = (e) => {
    const value = e.target.value;
    setText1(value === "" ? "" : Number(value));
  };

  const handleChange2 = (e) => {
    const value = e.target.value;
    setText2(value === "" ? "" : Number(value));
  };

  return (
    <div>
      <input
        type="number"
        value={text1}
        onChange={handleChange1}
        placeholder="Enter one number"
      />
      <input
        type="number"
        value={text2}
        onChange={handleChange2}
        placeholder="Enter second number"
      />
      <h3>{(text1 || 0) + (text2 || 0)}</h3>
    </div>
  );
}
