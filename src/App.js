import React from 'react';
import axios from 'axios';

import AllCases from './components/AllCases';
import CountriesCases from './components/CountriesCases';
import EspecificCountry from './components/EspecificCountry';

import './App.css';

function App() {

  return (
    <div className='container'>
      <h1 className='title'>Coronavirus Monitor</h1>
      <div className='all-cases'>
        <h1>Todos os casos no mundo</h1>
        <AllCases axios={axios} />
      </div>
      <EspecificCountry axios={axios} />
      <div className='all-countries'>
        <h1>Países</h1>
        <CountriesCases axios={axios} />
      </div>
    </div >
  )
}

export default App;
