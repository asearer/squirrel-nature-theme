// Gallery.js
import React from 'react';
import ImageCarousel from './ImageCarousel';
import image1 from '../assets/images/squirrel1.jpg';
import image2 from '../assets/images/squirrel2.jpg';
import image3 from '../assets/images/squirrel3.jpg';
import image4 from '../assets/images/squirrel4.jpg';
import image5 from '../assets/images/squirrel5.jpg';
import image6 from '../assets/images/squirrel6.jpg';
import image7 from '../assets/images/squirrel7.jpg';
import image8 from '../assets/images/squirrel8.jpg';
import image9 from '../assets/images/squirrel9.jpg';
import image10 from '../assets/images/squirrel10.jpg';

const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10
];

const Gallery = () => (
  <div>
    <h1>Squirrel Gallery</h1>
    <p>Check out some amazing pictures of squirrels.</p>
    <ImageCarousel images={images} />
  </div>
);

export default Gallery;

