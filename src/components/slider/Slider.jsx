import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './slider.css';
import Solidaire1 from "../../img/solidaire1.jpg"
import So1 from "../../img/so2.jpg";
import So2 from "../../img/so3.jpg";
import So4 from "../../img/so4.jpg";

function Slider() {
  return (
    <Carousel fade className='sliderr'>
      <Carousel.Item className='img'>
        <img
          className=" so "
          src={Solidaire1}
          alt="certificat"
          
        />
        <Carousel.Caption>
          <h3>First </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='img'>
        <img
          className="so"
          src={So2}
          alt="diplome"
        />

        <Carousel.Caption>
          <h3>Second </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='img'>
        <img
          className="so"
          src={So4}
          alt="haroun"
        />

        <Carousel.Caption>
          <h3>Third</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
       
      </Carousel.Item>
    
    </Carousel>
  );
}

export default Slider;