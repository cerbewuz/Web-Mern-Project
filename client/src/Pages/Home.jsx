import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import '../styles/global.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src="/showposter.jpg" alt="" className="show-poster" />
        <div className= "text-section" alt="">
        
        </div>
      </div>
        <div className="lower-panel">
          <h1>Recent Posts</h1>
          <p></p>
        </div>
      </div>
    
  );
}

export default Home;
