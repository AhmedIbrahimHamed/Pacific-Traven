import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';
import styles from './Navbar.module.scss';
import siteLogo from '../../../assets/pacific-logo.png'

function Navbar(props) {
    return (
        <Container className={styles.navbarContainer}>
            <Row >
                <div onClick={props.toggleModal} className={styles.btnModalToggler}>
                    <span className="fa fa-bars fa-lg"></span>
                </div>
                <Col className={`${styles.navbarLinks} ${styles.navbarLinkActive}`}>
                    <p><Link to="home" smooth={true} duration={100}>HOME</Link></p>
                </Col>

                <Col className={styles.navbarLinks}>
                    <p><Link to="resturant" smooth={true} duration={500} isDynamic={true} offset={-50}>RESTURANT</Link></p>
                </Col>

                <Col className={styles.navbarLinks}>
                    <p><Link to="menu" smooth={true} duration={600} isDynamic={true} offset={-50}>MENU</Link></p>
                </Col>

                <Col className={styles.logoContainer} xl="auto">
                    <a href="http://localhost:3001/">
                        <img className={styles.imgLogo} src={siteLogo} alt="Pacific Traven Logo" />
                    </a>
                </Col>

                <Col className={styles.navbarLinks}>
                    <p><Link to="drinks" smooth={true} duration={600}>DRINKS</Link></p>
                </Col>

                <Col className={styles.navbarLinks}>
                    <p><Link to="reservations" smooth={true} duration={600} isDynamic={true} offset={-50}>RESERVATIONS</Link></p>
                </Col>

                <Col className={styles.navbarLinks}>
                    <a className={styles.githubLink} href="https://github.com/AhmedIbrahimHamed" target="_blank" rel="noopener noreferrer">
                        GITHUB
                    </a>
                </Col>
            </Row>

        </Container>
    )
}

export default Navbar
