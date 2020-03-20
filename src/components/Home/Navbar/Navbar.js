import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import styles from './Navbar.module.scss';
import siteLogo from '../../../assets/pacific-logo.png'

function Navbar() {
    return (
        <Container className={styles.toolbarContainer}>
            <Row >
                <Col className={styles.toolbarLinks}>
                    <p >Home</p>
                </Col>

                <Col className={styles.toolbarLinks}>
                    <p>Resturant</p>
                </Col>

                <Col className={styles.toolbarLinks}>
                    <p>Menu</p>
                </Col>

                <Col className={styles.logoContainer} xl="auto">
                    <img className={styles.imgLogo} src={siteLogo} alt="Pacific Traven Logo"/>
                </Col>

                <Col className={styles.toolbarLinks}>
                    <p>Drinks</p>
                </Col>

                <Col className={styles.toolbarLinks}>
                    <p>Reservations</p>
                </Col>

                <Col className={styles.toolbarLinks}>
                    <p>Github</p>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Navbar
