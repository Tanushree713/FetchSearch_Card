import React, { useState } from "react";
import axios from "axios";
import ImageCards from "../ImageCards/ImageCards";

function SearchData() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  function dataSearch() {
    axios
      .get(`https://api.slingacademy.com/v1/sample-data/photos/${search}`)
      .then((response) => {
        setSearchResult([response.data.photo]);
      })
      .catch((error) => {
        console.error("Error fetching search result:", error);
      });
  }

  return (
    <>
    <div className="search">
      <input
        type="text"
        placeholder="Search By ID"
        name="input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={dataSearch}>Search</button>
      </div>
      <div>
         {searchResult.length > 0 && (
        <div className="search-results">
          {searchResult.map((result) => (
            <ImageCards
              key={result.id}
              id={result.id}
              imagesrc={result.url}
              title={result.title}
            />
          ))}
        </div>
       
        
      )}
      </div>
      </>
   
  );
}

export default SearchData;
