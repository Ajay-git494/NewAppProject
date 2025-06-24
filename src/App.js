import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { NewItem } from './Components/NewItem';
import NewsBoard from './Components/NewsBoard';

function App() {
  const [catagory,setCatagory]=useState("india");
  return (
    <>
      <Navbar setCatagory={setCatagory}/>
      <NewsBoard catagory={catagory}/>
      <NewItem/>
      
    </>
  );
}

export default App;
