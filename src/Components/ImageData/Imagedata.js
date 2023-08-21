import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCards from '../ImageCards/ImageCards';
import SearchData from '../SearchData/SearchData';

function ImageData() {
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentOffset, setCurrentOffset] = useState(0);
  const cardsPerPage = 20;

  useEffect(() => {
    fetchData();
  }, [currentOffset]);

  const fetchData = () => {
    axios
      .get('https://api.slingacademy.com/v1/sample-data/photos', {
        params: { offset: currentOffset, limit: cardsPerPage }
      })
      .then((response) => {
        setDatas(response.data.photos);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handlePrevClick = () => {
    if (currentOffset >= cardsPerPage) {
      setCurrentOffset(currentOffset - cardsPerPage);
    }
  };

  const handleNextClick = () => {
    setCurrentOffset(currentOffset + cardsPerPage);
  };

  return (
    <>
      <SearchData />
      <h1 className='head1'>Gallery</h1>
      <div className='Gallery'>
        {datas.length > 0 ? (
          datas.map((data) => (
            <ImageCards
              key={data.id}
              id={data.id}
              imagesrc={data.url}
              title={data.title}
            />
          ))
        ) : (
          <h1>Oops!! Not Found..</h1>
        )}
      </div>
      <div className='pagination'>
        <button
          disabled={currentOffset === 0}
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <span>
          Page {currentPage}
        </span>
        <button
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default ImageData;
