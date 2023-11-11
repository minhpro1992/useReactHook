"use client"
import { FC } from "react"
import styled, { keyframes } from "styled-components"

export const Advertisement: FC = () => {
  return (
    <StyleAdvertisementWrapper>
      <StyleAdvertisement>
        <StyledText>Advertisement1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</StyledText>
      </StyleAdvertisement>
    </StyleAdvertisementWrapper>
    )
}

const StyleAdvertisementWrapper = styled.div`
  background-image: linear-gradient(270deg, rgba(90, 194, 221, 0.4) 0%, rgba(190, 235, 246, 0.4) 98.67%);
  height: 40px;
  white-space: nowrap;
  padding: 10px;
  overflow: hidden;
`

const translate = keyframes`
  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
`
const StyleAdvertisement =  styled.div`
  animation: ${translate} 50s linear infinite;
`;
const StyledText = styled.span`
  color: rgb(32, 32,32);
  font-size: 1rem;
`