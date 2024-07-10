import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home">
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Frank the Squirrel's World</h1>
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
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTBeB0PuR90KI-dcgnaX469bc555l3zYzOeqjYOb9ubreCdMxx" alt="Squirrel 1" />
        <img src="https://cdn.mos.cms.futurecdn.net/m33Pou2DHPmjSvVGVX6sRH-1200-80.jpg" alt="Squirrel 2" />
        <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL25vdy0xN2ZhNGRmYy1mMGE1LTQ4OTktYjc5Ny1lYzY5MTQ5MWQyMzctMTIxMC02ODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=" alt="Squirrel 3" />
      </div>
    </section>
  </div>
);

export default Home;
