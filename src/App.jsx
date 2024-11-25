import "./App.css";
import SimpleText from "./components/task1/SimpleText";
import ArrayRecord from "./components/task1/ArrayRecord";
import ShowHide from "./components/task1/ShowHide";
import TwowayData from "./components/task1/TwowayData";
import SumoftwoNum from "./components/task1/SumoftwoNum";
import Counter from "./components/task2/Counter";
import DataFilter from "./components/task3/DataFilter";
function App() {
  return (
    <>
      <h2>Task 1</h2>
      <SimpleText />
      <ArrayRecord />
      <ShowHide />
      <TwowayData />
      <SumoftwoNum />
      <h2>Task2</h2>
      <Counter />
      <h2>Task3</h2>
      <DataFilter />
    </>
  );
}

export default App;