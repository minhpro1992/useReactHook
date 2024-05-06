import { useRef, useState, useEffect } from "react";

export const useIntersectionObserver = () => {
  // Create a ref for the element you want to observe
  const targetRef = useRef(null);
  // Set up state to track whether the element is in view or not
  const [inView, setInView] = useState<boolean>(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the target element is intersecting with the viewport
        if (entries && entries.length) {
          setInView(entries[0].isIntersecting);
        }
      },
      {
        // Optionally, you can configure the root, rootMargin, and threshold here
        root: null,
        rootMargin: "0px",
        threshold: 1, // Trigger when 50% of the element is in the viewport
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up observer
    return () => {
      if (targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  return {
    inView,
    targetRef,
  };
};
