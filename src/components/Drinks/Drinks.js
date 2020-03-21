import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from './Drinks.module.scss';
import cascadeLogo from '../../assets/cascade-logo.png';

const cocktails = () => {
    return (
        <Col className={styles.barSection} md={4}>
            <Row className="justify-content-center">
                <h5 className={styles.barSectionTitle}>COCKTAILS</h5>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Manhattan</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$11</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>rye whisky, sweet vermouth, bitters</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Dark &#38; Stormy</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$9</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>black rum, ginger beer, lime</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Old Cuban</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$11</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>aged rum, lime juice, bitters, champagne</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Negroni</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$11</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>gin, vermouth rosso, campari</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Bloody Mary</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$9</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>tomato juice, vodka, tabasco, bacon bits</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Green &#38; Amber</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$12</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>vodka, single-malt scotch, honey, lemon, green tea</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>White Russian</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$9</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>vodka, tia maria, heavy cream</p>
                </Col>
            </Row>
        </Col>
    );
};

const beer = () => {
    return (
        <Col className={styles.barSection} md={4}>
            <Row className="justify-content-center">
                <h5 className={styles.barSectionTitle}>BEER</h5>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Lagunitas</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$7</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>ipa, california</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>21st Amendment</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$8</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>back in black ipa, san francisco</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Breakside</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$8</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>wanderlust ipa, oregon</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Hill Farmstead</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$11</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>edward apa, vermont</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Alchemist</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$15</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>heady topper, vermont</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Hofbräu</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$8</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>dunkel, munich</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Delirium Tremens</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$12</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>golden ale, belgium</p>
                </Col>
            </Row>

        </Col>
    );
}

const wine = () => {
    return (
        <Col className={styles.barSection} md={4}>
            <Row className="justify-content-center">
                <h5 className={styles.barSectionTitle}>WINE</h5>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Sauvignon Blanc</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$18</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>cloudy bay, new zealand, 2012</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Pinot Grigio</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$13</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>corte della torre, veneto, 2012</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Chardonnay</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$13</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>gavilan, monterey, 2012</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Pinot Noir</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$14</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>heron, napa, 2011</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Cabernet Sauvignon</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$12</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>slingshot, napa, 2010</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Pianrosso</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$22</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>brunello di montacino, toscana, 2003</p>
                </Col>
            </Row>

            <Row className={styles.barItem}>
                <Col xs={7} className={styles.barItemTitle}>
                    <p>Prosecco</p>
                </Col>

                <Col xs={{ size: "1", offset: "3" }} className={styles.barItemDescription}>
                    <p>$14</p>
                </Col>

                <Col xs={10} xl={9} className={styles.barItemDescription}>
                    <p>bortolotti, brut, veneto, 2010</p>
                </Col>
            </Row>

        </Col>
    );
}

function Drinks() {
    return (
        <div className={styles.drinksContianer}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={{ size: "auto" }}>
                        <img className={styles.cascadeLogo} src={cascadeLogo} alt="Cascade Bar Logo" />
                    </Col>
                </Row>

                <Row>
                    {cocktails()}

                    {wine()}

                    {beer()}
                </Row>


            </Container>

        </div>
    )
}

export default Drinks
