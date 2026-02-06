import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Mohit Kumar",
    text: "I am a Software Engineer",
    replies: [],
  },
  {
    name: "Mohit Kumar",
    text: "I am a Software Engineer",
    replies: [
      {
        name: "Mohit Kumar",
        text: "I am a Software Engineer",
        replies: [],
      },
      {
        name: "Mohit Kumar",
        text: "I am a Software Engineer",
        replies: [
          {
            name: "Mohit Kumar",
            text: "I am a Software Engineer",
            replies: [],
          },
          {
            name: "Mohit Kumar",
            text: "I am a Software Engineer",
            replies: [
              {
                name: "Mohit Kumar",
                text: "I am a Software Engineer",
                replies: [],
              },
              {
                name: "Mohit Kumar",
                text: "I am a Software Engineer",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mohit Kumar",
    text: "I am a Software Engineer",
    replies: [],
  },
  {
    name: "Mohit Kumar",
    text: "I am a Software Engineer",
    replies: [],
  },
  {
    name: "Mohit Kumar",
    text: "I am a Software Engineer",
    replies: [],
  },
  {
    name: "Mohit Kumar",
    text: "I am a Software Engineer",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
