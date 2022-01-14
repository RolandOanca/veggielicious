import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Row, Col, Image, Button  } from 'react-bootstrap';
import classes from './About.module.css';

import map from "../../assets/map.png";





const About = () => {
    return (
        <div className={classes.diveder}>
            <Container fluid>
          

                <Row>
                    <Col>
                        
                        <Image src={map} fluid width='100%'/>
                           
            
                    </Col>  
                </Row>
            </Container>
        </div>
    )
}

export default About;
