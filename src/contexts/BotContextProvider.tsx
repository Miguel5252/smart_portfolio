'use client'
import { createContext, useState , ReactNode} from 'react';

const initialValue = {
  show: false,
  handleShowBot: (value: boolean)=>{} 
}

interface BotContextProviderProps {
  children: ReactNode;
}

export const botContext = createContext(initialValue)

function BotContextProvider({children}: BotContextProviderProps){
 const [show, setShow] = useState(false)
 const updateShow = (value: boolean) => setShow(value)

    return(
      <botContext.Provider value={{show:show, handleShowBot: (value)=> updateShow(value)}}>
        {children}
      </botContext.Provider>
    )
  }

  export default BotContextProvider



