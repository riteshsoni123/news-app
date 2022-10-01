import React, { useState } from "react";
import SearchBar from "./SearchBar";
import IndividualCard from "./IndividualCard";
import CircularProgress from "@mui/material/CircularProgress";
import "../index.css";

function Cards() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const checkElement = (element) => {
    const { content, description, title, url, urlToImage } = element;
    return content && description && title && url && urlToImage;
  };
  return (
    <>
      <SearchBar
        setData={setData}
        data={data}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <div className="center1 margin">
        {data.length === 0 && searchText !== "none" ? (
          <div className="center-spinner">
            <CircularProgress />
          </div>
        ) : (
          data.filter(checkElement).map((element, index) => {
            return (
              <div className="margin" key={index}>
                <IndividualCard data={element} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Cards;
