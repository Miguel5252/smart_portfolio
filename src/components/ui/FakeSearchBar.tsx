'use client'
import { useContext } from "react"
import { botContext } from "@/contexts/BotContextProvider"

function FakeSearchBar(){
  const {handleShowBot} = useContext(botContext)
  return(
    <div className="text-left cursor-pointer max-w-[500px] h-10 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-400 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 flex items-center focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
      onClick={()=>handleShowBot(true)}
  >Ask me anything...</div>
  )
} export default FakeSearchBar