import { useState } from "react";

export default function DataFilter() {
  const records = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ];
  const [value, setValue] = useState("");
  const filteredRecord = records.filter((record) =>
    record.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type to search"
      />
      <ul>
        {filteredRecord.length > 0 ? (
          filteredRecord.map((record, index) => <li>{record}</li>)
        ) : (
          <li>No Matching</li>
        )}
      </ul>
    </>
  );
}
