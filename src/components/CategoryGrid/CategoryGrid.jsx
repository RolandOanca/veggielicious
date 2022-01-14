import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row, Col, Image, Modal, Button  } from 'react-bootstrap';
import MenuItem from '../MenuItem/MenuItem';
import MenuData from '../MenuData/MenuData';


import classes from './CategoryGrid.module.css';

import breakfeast from "../../assets/breakfeast.png";
import lunch from "../../assets/lunch.png";
import dinner from "../../assets/dinner.png";
import pizza from "../../assets/pizza.png";
import burger from "../../assets/burgger.png";
import menu from "../../assets/menu.png";
import vegetarian from "../../assets/vegetarian.jpg";




const CategoryGrid = (props) => {
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const [items, setItems]= useState(MenuData);
 
    const filterItem = (categItem) => {
        const updatedItems = MenuData.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
        
    }


   
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
 
    }

    return (
        <div>
           <Container fluid>
               <Row>
                   <Col> 
                        <div className='py-3 py-md-2'></div>

                        <div className={classes.menu}>
                            <Image src={menu} fluid className={classes.menu_img}/>
                            <h1 className={classes.main_title }><span className='d-none d-md-block'>Discover Our Menu</span><span className='d-block d-md-none'>Our Menu</span></h1>
                       

                            <Image src={menu} fluid className={classes.menu_img}/>

                        </div>
                   </Col>
               </Row>
               <div className='py-3 py-md-2'></div>

               <Row>
                   <Col lg={4} md={6} sm={12}>
                       <div className={classes.card}>
                       <Image src={breakfeast} fluid className={classes.card_img}/>
                       <div className={classes.card_content}>
                            <h1>Breakfeast</h1>
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                            <Button  className={classes.custom_btn }  onClick={() => {
                                handleShow(values)
                                filterItem('breakfast')
                                }}>
                                    See the Menu
                            </Button>
                        </div>
                       </div>
                       
                   </Col>
                   <Col lg={4} md={6} sm={12}>
                        <div className={classes.card}>
                            <Image src={lunch} fluid className={classes.card_img}/>
                            <div className={classes.card_content}>
                                <h1>Lunch</h1>
                                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <Button  className={classes.custom_btn }  onClick={() => {
                                    handleShow(values)
                                    filterItem('lunch')
                                    }}>
                                    See the Menu
                                </Button>   
                            </div>
                       </div>

                   </Col>
                   <Col lg={4} md={6} sm={12} className="d-md-none d-lg-block">
                        <div className={classes.card}>
                       <Image src={dinner} fluid className={classes.card_img}/>
                       <div className={classes.card_content}>
                            <h1>Dinner</h1>
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                            <Button  className={classes.custom_btn }  onClick={() => {
                                handleShow(values)
                                filterItem('dinner')
                                }}>
                                    See the Menu
                            </Button>
                           
                        </div>
                       </div>
                   </Col>
               </Row>
               <Row>
                    <Col md={6} sm={12}>
                    <div className={classes.card}>
                       <Image src={pizza} fluid className={classes.card_img}/>
                       <div className={classes.card_content}>
                            <h1 className={classes.card_content_title}>Pizza</h1>
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                            <Button  className={classes.custom_btn }  onClick={() => {
                                handleShow(values)
                                filterItem('pizza')
                                }}>
                                    See the Menu
                            </Button>
                           
                        </div>
                       </div>

                   </Col>
                   <Col md={6} sm={12}>
                   <div className={classes.card}>
                       <Image src={burger} fluid className={classes.card_img}/>
                       <div className={classes.card_content}>
                            <h1 className={classes.card_content_title}>Burgger</h1>
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                            <Button  className={classes.custom_btn }  onClick={() => {
                                handleShow(values)
                                filterItem('burgger')
                                }}>
                                    See the Menu
                            </Button>
                            
                        </div>
                       </div>
                       

                   </Col>
               </Row>
               <Row>
               <Col sm={12} md={6} lg={12} >
                   <div className={classes.card}>
                       <Image src={vegetarian} fluid className={classes.card_img}/>
                       <div className={classes.card_content}>
                            <h1 className={classes.card_content_title}>Vegetarian</h1>
                            <h4>Coming Soon</h4>
                            <Button  className={classes.custom_btn } >
                                    See the Menu
                            </Button>
                            
                        </div>
                       </div>
                       
                   </Col>
                   <Col lg={4} md={6} sm={12} className="d-lg-none d-block">
                        <div className={classes.card}>
                       <Image src={dinner} fluid className={classes.card_img}/>
                       <div className={classes.card_content}>
                            <h1>Dinner</h1>
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                            <Button  className={classes.custom_btn }  onClick={() => {
                                handleShow(values)
                                filterItem('dinner')
                                }}>
                                    See the Menu
                            </Button>
                           
                        </div>
                       </div>
                   </Col>
               </Row>
           </Container>
          
           <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header className={classes.modal_header} closeButton>
                <Modal.Title className="mx-auto w-100"><h1 className={classes.main_title}>Our Menu</h1></Modal.Title>
                
                </Modal.Header>
                <Modal.Body>
                    <div className='py-3'></div>
                    <MenuItem  key={props.id} id={props.id} items={items}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default CategoryGrid
