'use client'
import { useContext } from "react"
import { botContext } from "@/contexts/BotContextProvider"

function FakeSearchBar(){
  const {handleShowBot} = useContext(botContext)
  return(
    <input
      type="text"
      className="max-w-2xl h-10 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
      placeholder="Ask the assistant anything about me"
      onClick={()=>handleShowBot(true)}
  />
  )
} export default FakeSearchBar