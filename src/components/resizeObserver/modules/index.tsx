import { useCallback, useEffect, useRef, useState } from "react";

export const useResizeObserver = () => {
  const [dimensions, setDimensions] = useState<DOMRectReadOnly | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  const observe = useCallback((target: HTMLElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new ResizeObserver((entries) => {
      for (let entry of entries) {
        console.log(entry);

        setDimensions(entry.contentRect);
      }
    });

    if (target) {
      observerRef.current?.observe(target);
    }
  }, []);

  useEffect(() => {
    observe(null); // Cleanup when unmounted
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [observe]);

  return { dimensions, observe };
};
