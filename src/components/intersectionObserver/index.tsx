import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Header } from "../header";
import { useIntersectionObserver } from "./modules";

export const IntersectionObserverExample = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { inView, targetRef } = useIntersectionObserver();
  useEffect(() => {
    if (inView) {
      const clientHeight = headerRef.current?.clientHeight;
      console.log(clientHeight);
      // window.scrollTo({
      //   behavior: "smooth",
      //   top: clientHeight,
      // });
      //   alert("trigger scroll to top event");
    }
  }, [inView]);
  console.log(inView);

  const handleClick = () => {
    headerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <Header headerRef={headerRef} />
      <ImageWrapper>
        {`This element is in view: ${inView}, top: ${headerRef.current?.clientHeight}`}
        <figure>
          <img
            src="/media/cc0-images/elephant-660-480.jpg"
            alt="Elephant at sunset"
          />
          <figcaption>An elephant at sunset</figcaption>
        </figure>
      </ImageWrapper>
      <ObserverElement ref={targetRef} onClick={handleClick}>
        Intersection element
      </ObserverElement>
    </div>
  );
};
const ObserverElement = styled.div`
  background: orange;
  margin-bottom: 10;
  max-width: 200;
  height: 40;
  margin-inline: auto;
  text-align: center;
`;
const ImageWrapper = styled.div`
  height: 992px;
  background: lightblue;
  margin-bottom: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;
