import {useState, useEffect} from 'react';

export const useWindowSize = () => {
  //checking to see if we're on the server
  const isSSR = typeof window !== 'undefined'

  const [windowSize, setWindSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight
  })

  // shared callback function
  const changeWindowSize = () => {
    setWindSize({width: window.innerWidth, height: window.innerHeight})

  }
  useEffect(() => {
    // mount
    window.addEventListener('resize', changeWindowSize)

    //unmount
    return () => {
      window.removeEventListener('resize', changeWindowSize)
    }
  }, [])


  return windowSize
}
