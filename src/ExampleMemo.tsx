import React, { useState, useMemo, useCallback } from "react";

type Props = {
  user: {
    fullName: string;
    grade: string;
  };
};
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState<number>(0);
  const user = useMemo(() => {
    console.log("useMemo");
    return {
      fullName: `user ${count}`,
      grade: `A${count}`,
    };
  }, [count]);
  const onBtnClick = useCallback(() => {
    console.log("onBtnClick");
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times from Parent component</p>
      <User user={user}></User>
      <button onClick={onBtnClick}>Click me</button>
    </div>
  );
}

const User = (props: Props) => {
  const {
    user: { fullName, grade },
  } = props;
  return (
    <div>
      <p>Full Name: {fullName}</p>
      <p>Grade: {grade}</p>
    </div>
  );
};

export default Example;
