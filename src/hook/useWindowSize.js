import { useState, useEffect } from "react"


function debounce (fn, delay = 100) {
  return args => {
      clearTimeout(fn.id)
      fn.id = setTimeout(() => {
        fn.call(this, args)
      }, delay)
  }
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', debounce(handleResize))

      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  return windowSize
}
