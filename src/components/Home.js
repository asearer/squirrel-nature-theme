import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home">
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to the Squirrel Nature Theme</h1>
        <p>Explore the wonderful world of squirrels in their natural habitat.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>

    <section className="description">
      <h2>About Squirrels</h2>
      <p>
        Squirrels are fascinating creatures. They are agile, curious, and often seen frolicking in trees and parks.
        Our website is dedicated to bringing you closer to these delightful animals through stunning visuals and engaging content.
      </p>
    </section>

    <section className="featured-images">
      <h2>Featured Images</h2>
      <div className="image-grid">
        <img src="https://placekitten.com/400/300" alt="Squirrel 1" />
        <img src="https://placekitten.com/401/301" alt="Squirrel 2" />
        <img src="https://placekitten.com/402/302" alt="Squirrel 3" />
      </div>
    </section>
  </div>
);

export default Home;
