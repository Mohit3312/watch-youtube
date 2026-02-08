import React from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <PersonRoundedIcon fontSize="large" />
      <span className="font-bold px-4">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
