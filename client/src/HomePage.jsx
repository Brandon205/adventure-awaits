import React from 'react';
import { Link } from 'react-router-dom';
import './css/Homepage.css';

export function HomePage() {
  return ( 
    <div className="App">
      <div className="homepage-content">
        <h1 className="AppName">Adventure Awaits</h1>
        <div className="">
          <h4 className="grey-text text-darken-3 lighten-3 right">
            Adventure Awaits is an online app that is designed as a one-stop-shop while creating your dream bucket list. 
            Choose from any of 14 detailed categories to begin making yours lists. Upon completing your adventure, upload
            photos and notes of the accomplishment so you'll never forget the fantastic day. 
            From Art, to Fitness, to Food, and Travel, Adventure Awaits' got you covered.
          </h4>
        </div>
      </div>
        <Link className="white-text link" to="/profile"> Your Profile </Link>  <br /> 
        <Link className="white-text link" to="/listitem/new"> Create A New Adventure </Link>
    </div>
  );
}
