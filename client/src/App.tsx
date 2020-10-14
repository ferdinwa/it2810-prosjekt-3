import React from 'react';
import AppNavbar from './components/AppNavbar'
import SearchBar from './components/SearchBar'
import Scroller from './components/Scroller'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <SearchBar/>
      <Scroller/>
    </div>

  );
}

export default App;
