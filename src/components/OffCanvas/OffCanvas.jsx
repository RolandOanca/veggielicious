import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas, Image } from 'react-bootstrap';
import classes from './OffCanvas.module.css';
import cart_nav from "../../assets/cart-nav.svg";
import cart from "../../assets/cart.svg";
import { useCart } from 'react-use-cart';


import Cart from '../Cart/Cart';


const OffCanvas = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {totalItems} = useCart();
  
    return (
      <>

        <div className={classes.nav_cart}  onClick={handleShow}>
        <div className="py-md-3"></div>
            <Image src={cart_nav} fluid className={classes.nav_cart_img} />
            <p className={classes.badge}>{}</p>
        </div>
  
        <Offcanvas show={show} placement={'end'} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          <Image src={cart} fluid className={classes.nav_cart_img} width='12%'/>
          <h2>{totalItems}</h2>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Cart/>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }


export default OffCanvas
