import React from 'react'
import styles from './Footer.module.scss';
import { Button } from 'reactstrap';

function Footer() {

    return (
        <section>
            <nav className={styles.preFooterContainer}>
                <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
                    <Button className={styles.footerBtn}><span className="fa fa-facebook"></span></Button>
                </a>

                <a href="https://facebook.com/login" target="_blank" rel="noopener noreferrer">
                    <Button className={styles.footerBtn}><span className="fa fa-twitter"></span></Button>
                </a>

                <a href="https://instgram.com/login" target="_blank" rel="noopener noreferrer">
                    <Button className={styles.footerBtn}><span className="fa fa-instagram"></span></Button>
                </a>
            </nav>

            <div className={styles.postFooter}>
                <p className={styles.contactInfoText}>PACIFIC TAVERN, 74 5TH AVENUE, BROOKLYN, NY 11217212-555-1212TEMPLATE.PLACEHOLDER@GMAIL.COM</p>

                <p className={styles.uploaderText}>Powered by <span className={styles.underlineText}>Ahmed Ibrahim</span></p>

            </div>
        </section>

    )
}

export default Footer
