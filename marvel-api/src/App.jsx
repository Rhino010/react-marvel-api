import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './components/CharacterList';
import './App.css';

const App = () => {
  

  return (
    <>
      <div className='app-container'>
        <h1>Marvel Characters</h1>
        <CharacterList /> {/*This is passing props to the character list*/}
      </div>
     
    </>
    )
  }

export default App;
