import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🙏",
        }),
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-150 ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages?.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        className="w-full ml-2 p-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On Form Submit", liveMessage);
          dispatch(
            addMessage({
              name: "Mohit Kumar",
              message: liveMessage,
            }),
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-87 px-2 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="mx-2 px-2 bg-green-100 ">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
