import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ShowListScreen.css';

const ShowListScreen = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
      } catch (error) {
        console.log('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="container">
      <div className="show-list">
        {shows.map((show) => (
          <Link to={`/show/${show.show.id}`} key={show.show.id} className="show-card">
            <h2 className="show-name">{show.show.name}</h2>
            <p className="show-details">Language: {show.show.language}</p>
            <p className="show-details">Type: {show.show.type}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowListScreen;
