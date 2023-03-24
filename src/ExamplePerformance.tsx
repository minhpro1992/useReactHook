import React, { useState } from "react";
import Calendar from "./Calendar";

type Props = {
  count: number;
};

function ExamplePerformance() {
  const [count, setCount] = useState<number>(0);
  const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false);
  return (
    <div>
      <p>You clicked {count} times from Parent component</p>
      <Counter count={count}></Counter>
      <Calendar isShowCalendar={isShowCalendar} />
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setIsShowCalendar(!isShowCalendar)}>
        ToggleCalendar
      </button>
    </div>
  );
}

const Counter = (props: Props) => {
  const { count } = props;
  return (
    <div>
      <p>Child component: {count}</p>
    </div>
  );
};

export default ExamplePerformance;
