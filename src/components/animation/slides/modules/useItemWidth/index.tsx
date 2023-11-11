import { useState } from "react"
export const useItemWidth = (listLength: number) => {
  const [itemWidth, setItemWidth] = useState(0)

  const containerReference = (element: HTMLElement | null) => {
    console.log(itemWidth, element);
    if (!element) return
    const containerWidth = element.scrollWidth
    const newWidth = (containerWidth ) / listLength 
    setItemWidth(newWidth)
  }

  return { containerReference, itemWidth }
}