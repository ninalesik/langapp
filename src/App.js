import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from "./components/Cards/data.json";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  function handlePrev() {
    setCount(count - 1);
  }

  function handleNext() {
    setCount(count + 1);
  }
  console.log(data[count]);
  if (count > 9) {
    console.log("Quizz is done!");
  }

  return (
    <div className="container">
      <Header />
      <button onClick={handlePrev}>prev</button>
      <Cards words={data[count]} count={count} key={count} />
      <button onClick={handleNext}>next</button>
      <Footer />
    </div>
  );
}

export default App;
