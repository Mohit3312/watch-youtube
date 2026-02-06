import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const dispatch = useDispatch();

  const searchCache = useSelector((state) => state.search);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setShowSuggestions(true);
    setSuggestions(json[1]);
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      }),
    );
  };

  useEffect(() => {
    // API call
    // console.log(searchQuery);

    // Make an API call after every key press
    // but if the difference between 2 key strokes is <200ms
    // decline the API call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(true);
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   *
   * key - i
   * - render the component
   * - useEffect()
   * - start timer => make an API call after 200ms
   *
   * key - ip
   * - destroy the component and call useEffect return method also
   * - re-render the component
   * - useEffect()
   * - start timer => make an API call after 200ms
   */

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="grid grid-flow-col shadow-lg">
        <div className="flex items-center col-span-1 justify-evenly">
          <MenuIcon className="cursor-pointer" onClick={toggleMenuHandler} />
          <a href="/">
            <img
              className="h-16"
              src="data:image/png;base64,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"
              alt="youtube-logo"
            />
          </a>
        </div>
        <div className="flex items-center col-span-10">
          <input
            className="px-5 w-2/5 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <div
            className="border border-gray-400 rounded-r-full bg-gray-100"
            style={{ padding: "2.5px 16px" }}
          >
            <SearchIcon fontSize="large" />
          </div>
        </div>
        <div className="flex items-center col-span-1">
          <PersonRoundedIcon fontSize="large" />
        </div>
      </div>
      <div className="grid grid-flow-col">
        <div className="col-span-1 w-27"></div>
        <div className="col-span-10">
          {showSuggestions && (
            <ul className="fixed bg-white w-131 shadow-lg rounded-lg border border-gray-100">
              {suggestions?.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-5 py-2 shadow-sm hover:bg-gray-100"
                >
                  <SearchIcon /> {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-span-1"></div>
      </div>
    </>
  );
};

export default Head;
