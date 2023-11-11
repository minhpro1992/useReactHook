'use client'
import type { FC } from "react";
import styled from "styled-components"
import { Slides } from "./slides";
import { Slide } from "./slides/Slide";
import { CONTAINER_WIDTH } from "../../const";

export const Animation:FC = () => {
  return (
    <Root>
      <Slides>
        {
            [...Array<unknown>(7)].map((_, index) => (
              <StyledLi key={index}>
                <Slide />
              </StyledLi>
              ))
          }
      </Slides>
      <LeftWrapper />
      <RightWrapper />
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  width: 100%; 
`
const BlurWrapper =  styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: calc((100% - ${CONTAINER_WIDTH}px) / 2);
  background-image: linear-gradient(90deg, rgb(255, 243, 230) 40%,
    rgba(255, 243, 230, 0.3) 90%);
`

const LeftWrapper = styled(BlurWrapper)`
  left: 0px;
` 

const RightWrapper = styled(BlurWrapper)`
  right: 0px;
` 

const StyledLi = styled.li`
  flex-shrink: 0;
  padding-block: 10px;
  list-style: none;
`