import React, { useEffect, useRef } from "react";

const ChatWindow = ({ messages }) => {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 p-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`p-2 my-2 px-4 rounded-lg text-white  inline-block ${
              msg.sender === "user"
                ? "bg-[#2F2F2F] text-right rounded-full"
                : ""
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default ChatWindow;
