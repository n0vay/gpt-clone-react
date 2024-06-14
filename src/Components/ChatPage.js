import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import InputBox from "./InputBox";
import SearchPageWidget from "./SearchPageWidget";
import openai from "../utils/openAiInit";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const newMessages = [...messages, { text, sender: "user" }];
    setMessages(newMessages);
    const gptQuery = text;
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      //TODO: Write Error Handling
    }
    const botResponse = gptResults.choices?.[0]?.message?.content;
    setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
    
  };

  return (
    <div className="bg-[#212121]">
      {messages.length === 0 && (
        <div className="fixed top-1/4 left-1/3 ">
          <SearchPageWidget />
        </div>
      )}
      <div className="flex flex-col h-screen items-center pb-20 overflow-y-auto">
        <div className="w-2/3 md:w-1/2 flex flex-col flex-1 ">
          <ChatWindow messages={messages} />
        </div>
        <div className="w-2/3 md:w-1/2">
          <div className="fixed bottom-5 left-1/4 right-1/4">
            <InputBox sendMessage={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
