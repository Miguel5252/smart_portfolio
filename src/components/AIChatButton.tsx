"use client";

import { Bot } from "lucide-react";
import { useState, useContext  } from "react";
import AIChatBox from "./AIChatBox";
import { botContext } from "@/contexts/BotContextProvider";

export default function AIChatButton() {
  const {show, handleShowBot} = useContext(botContext)

  return (
    <>
      <button onClick={() => handleShowBot(true)}>
        <Bot size={24} />
      </button>
      <AIChatBox open={show} onClose={() => handleShowBot(false)} />
    </>
  );
}
