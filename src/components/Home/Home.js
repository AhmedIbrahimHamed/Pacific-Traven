import React from 'react';
import styles from './Home.module.scss';
import Navbar from './Navbar/Navbar';

function Home(props) {
    return (
        <div className={styles.homeContainer}>
            <Navbar toggleModal={props.toggleModal}/>
            <div className={styles.descriptionContainer}>
                <p className={styles.catchPhrase}>BEST BURGER IN BROOKLYN</p>
                <br />
                <p className={styles.catchPhrasePragraph}>LOCALLY SOURCED <span className="fa fa-times" ></span> CRAFTED WITH LOVE</p>
            </div>
        </div>
    )
}

export default Home
