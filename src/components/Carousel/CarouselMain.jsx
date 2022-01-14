
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Image, Button } from 'react-bootstrap';
import classes from './CarouselMain.module.css';

import mealsImg from "../../assets/slider-img.png";
import deliveryImg from "../../assets/food-delavari.png";

const CarouselMain = () => {
    return (
        <div>
            <Carousel>
              <Carousel.Item interval={2000}>
                <Image src={mealsImg} fluid className={classes.slideimg}/>
                <Carousel.Caption className={classes.carousel}>
                  <h1>Say <b>goodbye</b> to planning and cooking!</h1>
                  <h3>discover our plant based dishes</h3>
                  <Button  className={classes.custom_btn}>Order Now</Button>
                </Carousel.Caption>
              </Carousel.Item>
              
             <Carousel.Item interval={2000}>
                <Image src={deliveryImg} fluid className={classes.slideimg}/>

                <Carousel.Caption className={classes.carousel}>
                  <h1><b>30 minutes</b> delivery</h1>
                  <h3>Everything you order will be quickly delivered to your door.</h3>
                  <Button  className={classes.custom_btn}>Order Now</Button>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
              

           
        </div>
    )
}

export default CarouselMain;

