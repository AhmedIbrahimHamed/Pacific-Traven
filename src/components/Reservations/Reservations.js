import React from 'react';
import { Button } from 'reactstrap';
import styles from './Reservations.module.scss';

function Reservations() {
    return (
        <section className={styles.reservationContainer}>
            <h1 className={styles.reservationTitle}>MAKE A RESERVATION</h1>

            <p className={`${styles.reservationText} ${styles.reservationOpenTableText}`}>POWERED BY OPENTABLE</p>

            <div>

                <a target="_blank" rel="noopener noreferrer" href="https://www.opentable.com/restref/client/?rid=1000&restref=1000&corrid=d44d614f-73db-44b1-bd97-4321af92bb86">
                    <Button className={styles.reservationButton}>Find a Table</Button>
                </a>
            </div>

            <p className={styles.reservationText}>Call (347) 555–1234 from 5a – 11p daily, or book online with OpenTable.</p>
            <p className={styles.reservationText}>Reservations required for parties of 6 or more.</p>
        </section>
    )
}

export default Reservations
