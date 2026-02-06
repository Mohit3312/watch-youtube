import React from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex p-2 shadow-sm bg-gray-100 rounded-lg my-2">
      <PersonRoundedIcon fontSize="large" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
