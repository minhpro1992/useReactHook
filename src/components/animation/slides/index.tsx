import type { FC } from "react"
import { Children } from "react"
import styled, { css } from "styled-components"
import { GetWidthType, SlideProps, SlideWidthProps, SlidesProps } from "../../../types"
import { useItemWidth } from "./modules/useItemWidth"
import { useSlides } from "./modules/useSlides"
import { CONTAINER_WIDTH, ITEM_GAP } from "../../../const"

export const Slides:FC<SlideProps> = (props) => {
  const { children } = props
  const listItemLength = Children.count(children);
  const { containerReference, itemWidth } = useItemWidth(listItemLength)
  const {
    currentIndex,
    handleClickNext,
    handleClickPrevious,
    isFirstIndex,
    isLastIndex,
  } = useSlides(listItemLength, itemWidth)

  const data: SlidesProps = {
    containerReference,
    itemWidth,
    currentIndex
  }
  
  return (<Root itemWidth={itemWidth}>
    <SlideWrapper>
      <StyledUl {...data} ref={containerReference}>
        {children}
      </StyledUl>
    </SlideWrapper>
    {isFirstIndex || <StyleArrowLeft onClick={handleClickPrevious}>Back</StyleArrowLeft>}
    {isLastIndex || <StyleArrowRight onClick={handleClickNext}>Next</StyleArrowRight>}
  </Root>)
}

const getWidth:GetWidthType = (props) => {
  const { itemWidth } = props
  const maxWidth = CONTAINER_WIDTH + (itemWidth + ITEM_GAP) *2;
  return css`
    width: clamp(${CONTAINER_WIDTH}px, 100%, ${maxWidth}px);
  `;
}
const Root = styled.div<SlideWidthProps>`
  margin-inline: auto;
  overflow-x: hidden;
  ${getWidth};
`

const SlideWrapper = styled.div`
  position: relative;
  width: ${CONTAINER_WIDTH}px;
`

const StyledUl = styled.ul<SlidesProps>`
  display: flex;
  gap: 36px;
  transform: ${ props => `translateX(-${props.itemWidth * props.currentIndex}px)`};
  width: 100%;
  transition: transform 0.3s ease 0s;
`
const StyledArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`
const StyleArrowLeft = styled(StyledArrow)`
  left: 20px;
`
const StyleArrowRight = styled(StyledArrow)`
  right: 20px;
`