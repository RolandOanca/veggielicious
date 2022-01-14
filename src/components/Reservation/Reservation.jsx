import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row, Col, Button  } from 'react-bootstrap';
import classes from './Reservation.module.css';





const Reservation = () => {
    return (
        <div className={classes.diveder}>
            <Container fluid>
                <Row>
                    <Col md={8} sm={12}>
                        <div className={classes.bg_overlay}>
                            <div className={classes.reservation_card}>
                            
                        
                                <div className={classes.reservation_card_inner}> 
                                    <h1>Book a Table</h1>
                            
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur obcaecati reiciendis maxime fugit qui, aliquam, enim com
                                        modi mollitia est totam impedit vero? Amet alias veniam mollitia earum, laboriosam repudiandae?</p>
                                    <Button  className={classes.custom_btn}>Order Now</Button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={4} sm={12}>
                        <div className={classes.about_card}>
                         
                    
                            <div className={classes.aboutn_card_inner}> 
                                <div className="py-md-3"></div>
                                <h2>Discover Our Story</h2>
                        
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias veniam mollitia earum, laboriosam repudiandae?</p>
                                <Button  className={classes.custom_btn}>Order Now</Button>
                            </div>
                        </div>
                       
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Reservation
