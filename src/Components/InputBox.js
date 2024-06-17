import React, { useState } from "react";

const InputBox = ({ sendMessage }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="p-2 flex bg-[#2F2F2F] rounded-full justify-center">
      <input
        type="text"
        className="flex-1 px-2 rounded-full bg-[#2F2F2F] h-12 text-white focus:outline-none  "
        value={input}
        placeholder="Message ChatGPT"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend} className="px-2 bg-[#2F2F2F] rounded-full">
        <svg
          className="w-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="#e8eaed"
        >
          <path d="M440-320h80v-168l64 64 56-56-160-160-160 160 56 56 64-64v168Zm40 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </svg>
      </button>
    </div>
  );
};

export default InputBox;
