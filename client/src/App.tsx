import React from 'react';
import AppNavbar from './components/AppNavbar'
import SearchBar from './components/SearchBar'
import Scroller from './components/Scroller'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar/>
      <SearchBar/>
      <Scroller/>
    </div>
    </Provider>

  );
}

export default App;
