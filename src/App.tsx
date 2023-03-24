import React, { useState, useEffect } from "react";

type Props = {
  count: number;
};
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState<number>(0);
  const func = () => {
    document.title = `You clicked ${count} times`;
    console.log("call func");
  };
  useEffect(func, [count]);

  return (
    <div>
      <p>You clicked {count} times from Parent component</p>
      <Counter count={count}></Counter>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const Counter = (props: Props) => {
  const { count } = props;
  return (
    <div>
      <p>Child component: {count}</p>
      <ThirdComponent count={count}></ThirdComponent>
    </div>
  );
};

const ThirdComponent = (props: Props) => {
  const { count } = props;

  return (
    <div>
      <span>Third Componnent: {count}</span>
    </div>
  );
};

export default Example;
