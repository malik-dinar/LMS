import React from "react";
import { format } from "timeago.js";


function Messages({ message, own }) {
  return (
    <>
      <div className="flex-1 overflow-auto bg-orange-100">
        <div className="py-2 px-3">
          {own ? (
            <div className="flex mb-2">
              <div className="rounded py-2 px-3 bg-white">
                <p className="text-sm mt-1">{message?.text}</p>
                <p className="text-right text-xs text-grey-dark mt-1">
                  {format(message?.createdAt)}
                </p>
              </div>
            </div>
          ) : (
            <div class="flex justify-end mb-2">
              <div class="rounded py-2 px-3 bg-green-200">
                <p class="text-sm mt-1">{message?.text}</p>
                <p class="text-right text-xs text-grey-dark mt-1">{format(message?.createdAt)}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Messages;
