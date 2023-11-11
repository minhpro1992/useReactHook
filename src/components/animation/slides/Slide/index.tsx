import type { FC } from "react"
import styled from "styled-components"

const Root = styled.div`
  padding-block: 22px;
  padding-inline: 20px;
  width: 356px;
  position: relative;
  border-radius: 20px;
  box-shadow: rgba(102, 102, 102, 0.2) 1px 3px 10px;
  background-color: rgb(255, 255, 255);
`
export const Slide: FC = () => {
  return (
      <Root>Slide</Root>
  )
}