import React, { useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row, Col, Image,} from 'react-bootstrap';

import classes from './MenuItem.module.css';
import cart from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";
import {useCart} from 'react-use-cart'



const MenuItem = (props) => {

    const {addItem} = useCart();
    
    return (
        <div>
            <Container>
                <Row>
                    {
                        props.items.map((elemnt) =>{
                            const {
                                id, name, image, description, price } = elemnt;
                                return (
                                    <Col md={6} sm={12} key={id} id={id}>
                                        <div className={classes.card} >
                                            <div className={classes.menu_item}>
                                                <Image src={image} fluid className={classes.menu_img}/>
                                            </div>
                                            <div className={classes.menu_item_inner}>
                                                <div className={classes.menu_heart}>
                                                    <div className="py-3"></div>
                                                    <Image src={heart} className="d-block mx-auto" fluid width='50%'/>
                                                </div>
                                                <h1 className={classes.main_title}>{name}</h1>
                                                <p>{description}</p>
                                                <h2 className="pb-3">Price: <b>{price}</b></h2>
                                                <div className={classes.chart_btn}>
                                                    <h2>Add <span><Image src={cart} fluid width='28%' onClick={() => addItem(elemnt)} /></span></h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>            
                                )
                            })
                        }
                </Row>
            </Container>
        </div>
    )
}

export default MenuItem;
