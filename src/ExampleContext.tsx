import React, { useState, createContext, useContext } from "react";

function ExampleContext() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState<number>(0);
  const CountContext = createContext(0);

  const Counter = () => {
    const count = useContext(CountContext);
    console.log(count);
    return (
      <div>
        Child component: {count}
        <ThirdComponent></ThirdComponent>
      </div>
    );
  };

  const ThirdComponent = () => {
    const count = useContext(CountContext);
    return <div>Third component: {count}</div>;
  };

  return (
    <div>
      <p>You clicked {count} times from Parent component</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  );
}

export default ExampleContext;
