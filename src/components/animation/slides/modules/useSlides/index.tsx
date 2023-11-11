
import { useState } from "react"
import { CONTAINER_WIDTH, ITEM_GAP } from "../../../../../const"

export const useSlides = (listLength: number, itemWidth: number) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const showItems = CONTAINER_WIDTH / (ITEM_GAP + itemWidth)
  const lastIndex =
    listLength - 1 - Math.floor(showItems)
  const isFirstIndex = currentIndex === 0
  const isLastIndex = currentIndex >= lastIndex

  const handleClickNext = () => {
    setCurrentIndex((current) => {
      if (current >= lastIndex) return current
      return current + 1
    })
  }

  const handleClickPrevious = () => {
    setCurrentIndex((current) => {
      if (current <= 0) return current
      return current - 1
    })
  }
console.log(currentIndex, isFirstIndex, isLastIndex);

  return {
    currentIndex,
    handleClickNext,
    handleClickPrevious,
    isFirstIndex,
    isLastIndex,
  }
}

