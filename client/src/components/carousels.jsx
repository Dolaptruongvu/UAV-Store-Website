import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './carousels-image';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false} style={{ height: '500px' ,margin: '0 auto',display: 'block',boxShadow: '-22px 26px 58px rgba(0, 0, 0, 0.176)' }}>
      <Carousel.Item style={{ height: '100%' }}>
        <CarouselImage img="mavic-4-pro" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '100%' }}>
        <CarouselImage img="mini-4-pro" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '100%' }}>
        <CarouselImage img="mini-4" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;