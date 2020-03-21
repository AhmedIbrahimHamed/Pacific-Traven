import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from './Menu.module.scss';
import darkLogo from '../../assets/pacific-dark.png'

const snacks = () => {
    return (
        <Fragment>
            <Row className="justify-content-center">
                <Col xs={{ size: "auto" }}>
                    <p className={styles.menuSectionTitle}>SNACKS <span className="fa fa-times"></span> SALADS</p>
                </Col>
            </Row>

            <Row className={styles.menuSectionItems} >
                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Primavera Salad</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$8</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>arugula, cherry tomato, shaved almonds, shallot vinaigrette</p>
                        </Col>
                    </Row>
                </Col>

                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Grilled Calamari</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$12</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>tomato sauce, lemon</p>
                        </Col>
                    </Row>
                </Col>

                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Mac and Cheese</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$13</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>cheddar, gruyere, gouda, truffle oil</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

const sandwiches = () => {
    return (
        <Fragment>
            <Row className="justify-content-center">
                <Col xs={{ size: "auto" }}>
                    <p className={styles.menuSectionTitle}>SANDWICHES</p>
                </Col>
            </Row>

            <Row className={styles.menuSectionItems} >
                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Alpine</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$10</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>fontina, gruyere, truffle oil on multigrain toast</p>
                        </Col>
                    </Row>
                </Col>

                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Reuben</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$15</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>pastrami, coleslaw, russian dressing on rye</p>
                        </Col>
                    </Row>
                </Col>

                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Raleigh</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$13</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>coleslaw, barbecue sauce, pickles on sesame roll</p>
                        </Col>
                    </Row>
                </Col>

                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Flatiron</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$15</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>steak, havarti, fried onions, chipotle mayo on challah</p>
                        </Col>
                    </Row>
                </Col>

                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Milanese</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$13</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>fried chicken, lettuce, tomato, mayo on focaccia</p>
                        </Col>
                    </Row>
                </Col>

                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Classic</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$15</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>ham, unmelted cheddar, mayo on kaiser roll</p>
                        </Col>
                    </Row>
                </Col>

            </Row>

        </Fragment>
    );
};

const mains = () => {
    return (
        <Fragment>
            <Row className="justify-content-center">
                <Col xs={{ size: "auto" }}>
                    <p className={styles.menuSectionTitle}>MAINS</p>
                </Col>
            </Row>

            <Row className={styles.menuSectionItems} >
                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Lobster Bolognese</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$28</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>linguini, lobster tail, herbs in tomato &#38; garlic broth</p>
                        </Col>
                    </Row>
                </Col>

                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Salmon Steak</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$28</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>quinoa, roasted carrots, mustard lemon glaze</p>
                        </Col>
                    </Row>
                </Col>

                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Dry-Aged Rib-Eye</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$36</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>grass-fed, with arugula salad, smashed potatoes</p>
                        </Col>
                    </Row>
                </Col>

                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Burger</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$20</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>gruyere, fried onions, special sauce on challah roll</p>
                        </Col>
                    </Row>
                </Col>

                <Col className={styles.menuItem} xs={12} md={6} lg={4}>
                    <Row >
                        <Col xs={6} className={styles.menuItemTitle}>
                            <p>Braised Lamb</p>
                        </Col>

                        <Col xs={{ size: "1", offset: "4" }} className={styles.menuItemDescription}>
                            <p>$25</p>
                        </Col>

                        <Col xs={10} xl={9} className={styles.menuItemDescription}>
                            <p>jasmine rice pilaf, roasted almonds, sesame soy reduction</p>
                        </Col>
                    </Row>
                </Col>

            </Row>

        </Fragment>
    );
};

function Menu() {
    return (
        <Container className={styles.menuContainer}>
            <Row className="justify-content-center">
                <Col xs={{ size: "auto" }}>
                    <img className={styles.darkLogo} src={darkLogo} alt="Pacific Traven Logo" />
                </Col>
            </Row>

            {snacks()}

            {sandwiches()}

            {mains()}

        </Container>
    )
}

export default Menu
