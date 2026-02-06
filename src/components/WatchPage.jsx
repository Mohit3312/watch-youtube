import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <div className="flex flex-col">
      <div className="px-5">
        <iframe
          width="1200"
          height="600"
          src={`https://www.youtube.com/embed/${searchParams?.get("v")}?si=Iqa3KdIqqYT-iVpA`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
