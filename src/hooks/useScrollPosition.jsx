import {useEffect,useState} from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(()=>{
    const pageYOffsetChange=()=>{
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', pageYOffsetChange)
    pageYOffsetChange()

    return ()=> window.removeEventListener('scroll', pageYOffsetChange)
  },[])
  return scrollPosition
};

