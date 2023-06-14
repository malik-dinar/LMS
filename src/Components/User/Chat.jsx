import React, { useEffect } from "react";
import Conversation from "./Conversation";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import axios from "axios";
import { baseUrl, socketConnection } from "../../utils/constant";
import Messages from "./Messages";
import { VscPlay } from "react-icons/vsc";
import ChatDate from "./chatDate";
import { io } from "socket.io-client";

function Chat({ user }) {
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState("");
  // const [socket, setSocket] = useState(null);
  const [arrivalMessage, setArrivalNewMessage] = useState(null);
  const socket = useRef(io.connect(`${socketConnection}`));
  const scroLLRef = useRef();
  const data = useSelector((state) => state.userData.value);
  const data2 = useSelector((state) => state.tutorData.value);
  let userId = data._id;
  let tutorId = data2._id;
  let student;

  if (user === "student") {
    userId = userId;
    student = true;
  } else {
    userId = tutorId;
    student = false;
  }

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setArrivalNewMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender);
    setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", userId);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [userId]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${baseUrl}/chat/${userId}`);
        setConversation(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${baseUrl}/chat/message/${currentChat?._id}`
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    if(newMessages.length!==0){
      e.preventDefault();
      const message = {
        sender: userId,
        text: newMessages,
        conversationId: currentChat._id,
      };
  
      const receiverId = currentChat.members.find((member) => member !== userId);
  
      socket.current.emit("sendMessage", {
        senderId: userId,
        receiverId: receiverId,
        text: newMessages,
      });
  
      try {
        const res = await axios.post(`${baseUrl}/chat/message`, message);
        setMessages([...messages, res.data]);
        setNewMessages("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    scroLLRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSearch = async (e) => {
    const input = e.target.value;
    await axios.get(`${baseUrl}/admin/searchTutor/${input}`).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <div>
        <div className="w-full h-3"></div>
        <div className="container mx-auto -mt-10">
          <div className="py-6 h-screen">
            <div className="flex border border-grey rounded shadow-lg h-full">
              {/* <!-- Left --> */}
              <div className="w-1/3 border flex flex-col">
                {/* <!-- Search --> */}
                {student ? (
                  <div className="py-2 px-2 bg-grey-lightest mt-8">
                    <input
                      type="text"
                      className="w-full px-2 py-2 text-sm"
                      placeholder="Search for mentors.."
                      onChange={handleSearch}
                    />
                  </div>
                ) : (
                  <></>
                )}

                {/* <!-- Contacts --> */}
                <div className="bg-grey-lighter flex-1 overflow-auto">
                  {conversation.length ? (
                    conversation.map((items) => (
                      <div
                        onClick={() => setCurrentChat(items)}
                        key={items._id}
                      >
                        <Conversation
                          conversation={items}
                          currentUser={userId}
                          student={student}
                        />
                      </div>
                    ))
                  ) : (
                    <h1>No chats</h1>
                  )}
                </div>
              </div>

              {/* <!-- Right --> */}
              <div className="w-2/3 border flex flex-col">
                {/* <-- Header --> */}
                <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-grey-darkest">
                        New Movie! Expendables 4
                      </p>
                      <p className="text-grey-darker text-xs mt-1">
                        Andrés, Tom, Harrison, Arnold, Sylvester
                      </p>
                    </div>
                  </div>
                </div>
                <ChatDate />

                {/* messages */}
                {messages.length && messages[0] !== null ? (
                  messages.map((m, key) => (
                    <div ref={scroLLRef} key={key}>
                      <Messages message={m} own={m?.sender !== userId} />
                    </div>
                  ))
                ) : (
                  <h1 className="cursor-default">
                    Open a conversation to start a chat
                  </h1>
                )}
                <div className="bg-grey-lighter px-4 py-4 flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org  /2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        opacity=".45"
                        fill="#263238"
                        d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1 mx-4">
                    <input
                      className="w-full border rounded px-2 py-2"
                      type="text"
                      onChange={(e) => setNewMessages(e.target.value)}
                      value={newMessages}
                      required
                    />
                  </div>
                  <div>
                    <VscPlay
                      onClick={handleSubmit}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
