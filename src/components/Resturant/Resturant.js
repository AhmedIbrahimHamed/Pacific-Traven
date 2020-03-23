import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from './Resturant.module.scss';
import Slider from './Slider/Slider';

function Resturant() {
    return (
        <section>
            <Container className={`${styles.resturantContainer} container-fluid`}>
                <Row>

                    <Col xl={{ size: 7}} md={{ size: 8 }} xs={{ size: 12 }}>
                        <h2>Located in Park Slope,
                        Pacific Tavern is a purveyor of fine American dining from the esteemed Chef Billy Lang.</h2>

                        <p className={`${styles.grayText} mt-4`} >PHOTOS BY NICOLE FRANZEN</p>

                        <p className={`${styles.grayText} ${styles.AboutUsParagraph}`}>Pacific Tavern opened in May 2010 and is located inside the Smith Hotel Brooklyn.
                        Since then, Golden Spork winner Chef Lang has been serving both quality interpretations
                        of classic dishes and daring new ventures into the uncharted territories of food.</p>
        
                        <p className={`${styles.grayText} mt-3`}>Pacific Tavern's interior,
                        designed by the award-winning Hayden Collective,
                        reflects the hip sensibilities of the surrounding area while also paying
                        tribute to Brooklyn's storied past. The multi-level restaurant offers the choice
                        to observe passers-by in the glass-encased Cascade Bar on the 2nd floor, or watch the art of cooking as it occurs in the open-kitchen dining room.</p>
                    </Col>

                    <Col className={styles.contactResturantText} md={{ size: 3, offset: 1 }} xs={{ size: 12, offset: 0 }}>
                        <div>
                            <p className={styles.grayText}>PHONE</p>
                            <p className={`${styles.grayText} mt-2`}>(347) 555-1234</p>
                        </div>

                        <div className="mt-5">
                            <p className={styles.grayText}>LOCATION</p>
                            <p className={`${styles.grayText} mt-2`}>74 5th Avenue <br />
                        at St. Marks Place <br />
                        Brooklyn, NY 11217</p>
                        </div>

                        <div className="mt-5 mb-5">
                            <p className={styles.grayText}>HOURS</p>
                            <p className={`${styles.grayText} mt-2`}><em>M-Th</em> 5p–11p <br />
                                <em>F-Sa</em> 12p–11p <br />
                                <em>Su</em> 10a–11p<br />
                            </p>
                        </div>

                    </Col>
                </Row>
            </Container>

            <Slider />

        </section>
    )
}

export default Resturant
