import React, {useState, createContext, useContext, useEffect, useCallback} from 'react';

const OpenCloseContext = createContext(false)

export const OpenCloseProvider = ({children}) => {
  const [isOpen, setOpen] = useState(false)

  const toggleOpenClose = useCallback(() => setOpen(!isOpen), [isOpen])

  return (
    <OpenCloseContext.Provider value={{isOpen, setOpen, toggleOpenClose}}>
      {children}
    </OpenCloseContext.Provider>
  )
}

export const useOpenClose = () => {
  const {isOpen, setOpen, toggleOpenClose} = useContext(OpenCloseContext)
  return {isOpen, setOpen, toggleOpenClose}
}