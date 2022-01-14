import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCustom from '../components//Navbar/Navbar';
import CarouselMain from '../components/Carousel/CarouselMain';
import CategoryGrid from '../components/CategoryGrid/CategoryGrid';
import Reservation from '../components/Reservation/Reservation';
import About from '../components/About/About';
import { CartProvider } from 'react-use-cart';


const Home = () => {


    return (
        <CartProvider>
            <NavbarCustom/>
            <CarouselMain/>
            <CategoryGrid/>
            <Reservation/>
            <About/>     
        </CartProvider>
    )
}

export default Home
