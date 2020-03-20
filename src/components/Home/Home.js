import React from 'react';
import styles from './Home.module.scss';
import Navbar from './Navbar/Navbar';

function Home() {
    return (
        <div className={styles.homeContainer}>
            <Navbar />
            <div className={styles.descriptionContainer}>
                <p className={styles.catchPhrase}>BEST BURGER IN BROOKLYN</p>
                <br />
                <p className={styles.catchPhrasePragraph}>LOCALLY SOURCED <span className="fa fa-times" ></span> CRAFTED WITH LOVE</p>
            </div>
        </div>
    )
}

export default Home
