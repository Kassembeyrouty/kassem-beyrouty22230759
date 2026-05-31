import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">

      <div className="hero">
        <img src="/images/nature.jpg" alt="Art Gallery" className="hero-img" />
        <div className="hero-text">
          <h2>Welcome to Art Gallery</h2>
          <p>
            A dedicated space for exhibiting and celebrating visual art,
            serving as a bridge between artists and art lovers. We promote,
            manage, and curate works to build artistic reputations and foster
            community engagement.
          </p>
        </div>
      </div>

      <div className="home-cards">
        <div className="card">
          <h3>🎨 Painting</h3>
          <p>Explore stunning paintings from local and international artists.</p>
        </div>
        <div className="card">
          <h3>🏛️ Architecture</h3>
          <p>Discover architectural masterpieces and design inspirations.</p>
        </div>
        <div className="card">
          <h3>🎭 Theatre</h3>
          <p>Experience the art of performance and theatrical design.</p>
        </div>
      </div>

    </div>
  );
}

export default Home;