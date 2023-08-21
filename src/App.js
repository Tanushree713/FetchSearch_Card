import './App.css';
import {Route , Routes } from 'react-router-dom' ;
import ImageData from './Components/ImageData/Imagedata';
import ImageDetails from './Components/ImageDetails/ImageDetails';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<ImageData/>}/>
      <Route path='/showdata/:id' element={<ImageDetails />}/>
      
    </Routes>
    </>
  );
}

export default App;
