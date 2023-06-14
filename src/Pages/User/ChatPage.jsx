import React from "react";
import Chat from "../../Components/User/Chat";
import ChatNav from "../../components/user/ChatNav";

function ChatPage({ user }) {
  return (
    <>
      <ChatNav user={user}/>
      <Chat user={user} />
    </>
  );
}

export default ChatPage;
