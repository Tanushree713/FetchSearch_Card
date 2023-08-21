import React from 'react'; 
import {Link} from 'react-router-dom';
import {useState} from 'react';


function ImageCards(props){
  const [addToFavAlert, setAddToFavAlert] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  function handleAddToFav() {
    setAddToFavAlert(true);
  }

  function handleConfirmAddToFav(isPublic) {
    setIsPublic(isPublic);
    setAddToFavAlert(false);
    
  }
  function handleCloseDialog() {
    setAddToFavAlert(false);
  }


   return(
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imagesrc} className="card_img" />
          <div className="card_info">
            <h3 className="card_title">{props.title}</h3>
            </div>
            <div>
            <Link to={`/showdata/${props.id}`}>
              <button >About</button>
            </Link>
            </div>
            <div>
            <Link to={``}>
              <button onClick={handleAddToFav}>Add To Fav</button>
            </Link>
            </div>
        </div>
      </div>
      {addToFavAlert && (
        <div className="fav-dialog">
          <div className="fav-dialog-box">
            <button className="close-button" onClick={handleCloseDialog}>
              X
            </button>
            <p>Do you want to add this card as public or private?</p>
            <button className="public" onClick={() => handleConfirmAddToFav(true)}>
              Public
            </button>
            <button className="private" onClick={() => handleConfirmAddToFav(false)}>
              Private
            </button>
          </div>
        </div>
      )}
    </>
   )
}
export default ImageCards ;