// From https://michalmuszynski.com/blog/react-scroll-handler-hook/
import { useState, useEffect } from "react"
const isWindowAvailable = typeof window !== "undefined"

const getPosition = () => isWindowAvailable ? window.pageYOffset : undefined

const useWindowScrollPosition = () => {

  const [scrollPosition, setScrollPosition] = useState(getPosition())

  useEffect(() => {
    if (!isWindowAvailable) {
      return false
    }

    const handleScroll = () => {
      setScrollPosition(getPosition())
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollPosition
}

export default useWindowScrollPosition