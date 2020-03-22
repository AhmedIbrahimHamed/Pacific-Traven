import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';
import styles from './ToggleModal.module.scss';
import siteLogo from '../../assets/pacific-logo.png';

function ToggleModal(props) {
    if (props.isModalOpen && props.windowWidth <= 770) {
        return (
            <div className={styles.toggleModalContainer}>
                <div className={styles.closeBtn} onClick={props.toggleModal}>X</div>
                <Container>
                    <Row className={styles.imgLogoContainer}>
                        <a href="http://localhost:3000/">
                            <img className={styles.imgLogo} src={siteLogo} alt="Pacific Traven Logo" />
                        </a>
                    </Row>

                    <Row className={styles.toggleLinksContainer}>

                        <Col className={styles.toggleLink}>
                            <p className={styles.toggleLinkText}><Link onClick={props.toggleModal} to="home" smooth={true} duration={100}>HOME</Link></p>
                        </Col>

                        <Col className={styles.toggleLink}>
                            <p className={styles.toggleLinkText}><Link onClick={props.toggleModal} to="resturant" smooth={true} duration={500} isDynamic={true} offset={-50}>RESTURANT</Link></p>
                        </Col>

                        <Col className={styles.toggleLink}>
                            <p className={styles.toggleLinkText}><Link onClick={props.toggleModal} to="menu" smooth={true} duration={500} isDynamic={true} offset={-50}>MENU</Link></p>
                        </Col>

                        <Col className={styles.toggleLink}>
                            <p className={styles.toggleLinkText}><Link onClick={props.toggleModal} to="drinks" smooth={true} duration={500}>DRINKS</Link></p>
                        </Col>

                        <Col className={styles.toggleLink}>
                            <p className={styles.toggleLinkText}><Link onClick={props.toggleModal} to="reservations" smooth={true} duration={500} isDynamic={true} offset={-50}>RESERVATIONS</Link></p>
                        </Col>

                    </Row>

                </Container>
            </div>
        )
    } else {
        return null;
    }
}

export default ToggleModal
