import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShowListScreen from './screens/ShowListScreen';
import ShowDetailsScreen from './screens/ShowDetailsScreen';
import "./App.css"

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<ShowListScreen />} />
      <Route path="/show/:showId" element={<ShowDetailsScreen />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
