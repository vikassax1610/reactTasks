export default function ArrayRecord() {
  const arr = [
    {
      Fname: "vikas",
      Lname: "Saxena",
      City: "Bareilly",
    },
  ];
  return (
    <>
      <h1>First Name: {arr[0].Fname}</h1>
      <h1>LAST Name: {arr[0].Lname}</h1>
      <h1>City: {arr[0].City}</h1>
    </>
  );
}
