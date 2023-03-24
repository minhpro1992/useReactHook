import { useCallback, useRef, useState } from "react";

function ExampleUseRef() {
  const [count, setCount] = useState<number>(0);
  let ref = useRef(0);
  const elementRef = useRef<HTMLParagraphElement>(null);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log(elementRef.current);
    alert("You clicked " + ref.current + " times!");
  }
  const incrementBtnClick = useCallback(() => setCount(count + 1), [count]);
  console.log("render");
  return (
    <>
      <p ref={elementRef}>You clicked {count} times from Parent component</p>
      <button onClick={incrementBtnClick}>Increment count</button>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}

export default ExampleUseRef;
