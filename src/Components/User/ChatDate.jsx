import React from "react";

function ChatDate() {
  return (
    <>
      <div className="bg-orange-100">
      {/* <div className="flex justify-center mb-2">
        <div className="rounded py-2 px-4 bg-blue-100">
          <p className="text-sm uppercase">February 20, 2018</p>
        </div>
      </div> */}

      <div className="flex justify-center mb-4">
        <div className="rounded py-2 px-4 bg-yellow-100">
          <p className="text-xs">
            Messages to this chat and calls are now secured with end-to-end
            encryption. Tap for more info.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default ChatDate;
