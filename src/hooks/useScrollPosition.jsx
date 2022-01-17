import {useEffect, useState} from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const pageYOffsetChange = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', pageYOffsetChange)
    pageYOffsetChange()

    return () => window.removeEventListener('scroll', pageYOffsetChange)

    // using an empty dependencies array to make sure the effect function is called only once the component(that this hook is called in) is mounted.
  }, [])

  return scrollPosition
};

