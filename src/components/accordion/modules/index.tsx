import { useEffect, useRef, useState } from "react";

export const useAccordion = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [childHeight, setChildHeight] = useState<number>(0);
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleIconClick = () => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    if (accordionRef.current) {
      console.log(accordionRef.current.clientHeight);
      const height = accordionRef.current.clientHeight;
      setChildHeight(height);
    }
  }, [accordionRef]);
  return {
    isToggle,
    handleIconClick,
    accordionRef,
    childHeight,
  };
};
