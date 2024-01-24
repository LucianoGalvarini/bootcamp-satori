import { useState } from "react";

const MultipleCounter = () => {
  const [counters, setCounters] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counters;

  const handleCounter = (e) => {
    const { name } = e.target;

    setCounters({
      ...counters,
      [name]: counters[name] + 1,
    });
  };

  return (
    <>
      <h1>MultipleCounter</h1>
      <hr />

      <h3>Counters</h3>

      <div>
        <h5>Counter 1: {counter1}</h5>
        <h5>Counter 2: {counter2}</h5>
        <h5>Counter 3: {counter3}</h5>
      </div>

      <div>
        <button onClick={handleCounter} name="counter1">
          Counter 1
        </button>
        <button onClick={handleCounter} name="counter2">
          Counter 2
        </button>
        <button onClick={handleCounter} name="counter3">
          Counter 3
        </button>
      </div>
    </>
  );
};

export default MultipleCounter;
