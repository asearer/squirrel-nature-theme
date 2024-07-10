import React from 'react';
import './About.css';

const About = () => (
  <div className="about">
    <h1>About Us</h1>
    <p>Welcome to our website dedicated to the wonderful world of squirrels. Here, you will find fascinating information, stunning images, and engaging content about these agile and curious creatures.</p>
    
    <div className="about-section">
      <h2>Our Mission</h2>
      <p>Our mission is to bring you closer to nature by showcasing the beauty and habits of squirrels in their natural habitats. We aim to educate and inspire people to appreciate these amazing animals.</p>
    </div>

    <div className="about-section">
      <h2>What We Offer</h2>
      <ul>
        <li>High-quality images of squirrels</li>
        <li>Interesting facts and information</li>
        <li>Interactive content and quizzes</li>
        <li>Community forums and discussions</li>
      </ul>
    </div>
    
    <div className="about-section">
      <h2>Join Us</h2>
      <p>If you love nature and want to learn more about squirrels, join our community! <a href="/signup">Sign up now</a> to get the latest updates and exclusive content.</p>
    </div>

    <img src="https://placekitten.com/600/400" alt="Squirrel" />
  </div>
);

export default About;

