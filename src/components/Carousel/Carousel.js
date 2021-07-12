import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './carousel.css'


export const CarouselBan = () => {
  return(
    <Carousel className="containerBanner">
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="./images/bannerCarousel/full3adidascopa.png"
            alt="Adidas"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="./images/BannerCarousel/hellowinterbannerok.png"
            alt="HelloWinter"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="./images/bannerCarousel/full4pumaspectra.png"
            alt="PumaSpectra"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="./images/bannerCarousel/BannerPUMARiderDouble.png"
            alt=""
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src="./images/bannerCarousel/full2nikemtz.png"
            alt="Nike"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
};