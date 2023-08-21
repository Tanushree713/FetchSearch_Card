import React, { useEffect ,useState } from 'react' ;
import { useParams } from 'react-router-dom';
import SearchData from '../SearchData/SearchData';
import {Link } from 'react-router-dom'
import axios from 'axios';

function ImageDetails(){
   const{id} = useParams() ;
   const[showdetails , setDetails] = useState({}) ;

   async function downloadImages() {
    const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
    console.log(response.data.photo.url) ;
  
      setDetails({
        image: response.data.photo.url,
        title: response.data.photo.title,
        id: response.data.photo.id ,
        desc:response.data.photo.description,
      });
   }
  useEffect(() => {
    downloadImages();
  }, []);

   return(
    <>
    <SearchData/>
    <div className='Bigcontainer'style={{ backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 30.97%, rgb(26, 26, 26) 52.3%, rgba(26, 26, 26, 0.04) 98.47%, rgb(26, 26, 26) 100%), url(${showdetails.image})` }}>
      <div className='container1'>
        <div className="card_details">
          <img src={showdetails.image} className="card_img" alt={showdetails.title} />
          <div className="card_info">
            <h3 className="card_title">{showdetails.title}</h3>
            <Link to={``}>
              <button >Add To Fav</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='container2'>
        <h1>{showdetails.title}</h1>
        <h2> ID : {showdetails.id}</h2>
        <Link to={`/`}>
              <button >Back To Home</button>
            </Link>
      </div>
    </div>
    <div className='container3'>
      <h1>About The Card</h1>
        <h4>{showdetails.desc}</h4>
      </div>

    
    </>
   )
}

export default ImageDetails ;