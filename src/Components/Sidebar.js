import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 z-40 w-[15%] h-screen">
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#171717]">
          <div className="space-y-2 font-medium">
            <div
              onClick={() => {
                window.location.reload();
              }}
              className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 hover:cursor-pointer"
            >
              <div className="ms-3">New Chat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
