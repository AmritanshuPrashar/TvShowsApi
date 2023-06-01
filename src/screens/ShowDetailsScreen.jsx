import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShowDetailsScreen.css';

const ShowDetailsScreen = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [showId]);

  if (!show) {
    return <div className="details-loading">Loading...</div>;
  }

  return (
    <div className="details-container">
      <h1 className="details-title">{show.name}</h1>
      <p className="details-summary">{show.summary}</p>
    </div>
  );
};

export default ShowDetailsScreen;
