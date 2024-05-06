import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useResizeObserver } from "./modules";

export const ResizeObserverCompoennt = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { dimensions, observe } = useResizeObserver();

  useEffect(() => {
    observe(targetRef.current);
  }, [observe]);

  return (
    <div style={{ position: "relative" }}>
      <ResizeElement ref={targetRef} />
      {dimensions && (
        <ResizeInfoElement height={dimensions.height}>
          Width: {dimensions.width}px, Height: {dimensions.height}px
        </ResizeInfoElement>
      )}
    </div>
  );
};

const ResizeElement = styled.div`
  margin-inline: auto;
  height: 200px;
  resize: both;
  background: lightblue;
  overflow: auto;
`;
const ResizeInfoElement = styled.div<{ height: number }>`
  position: absolute;
  top: ${(props) => props.height || 40};
  min-height: 200px;
  width: 100vw;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;
