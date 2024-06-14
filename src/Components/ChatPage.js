import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import InputBox from "./InputBox";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    const newMessages = [...messages, { text, sender: "user" }];
    setMessages(newMessages);
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { text: "This is a bot response", sender: "bot" },
      ]);
    }, 100);
  };

  return (
    <div className="bg-[#212121] min-h-screen">
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
