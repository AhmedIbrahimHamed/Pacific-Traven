import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import carouselImg1 from '../../../assets/10748270326_e94eeb2435_k.jpg';
import carouselImg2 from '../../../assets/10748178545_3e1e4056b9_k.jpg';
import styles from './Slider.module.scss'

function Slider() {
    return (
        <Carousel infiniteLoop={true} useKeyboardArrows={true} dynamicHeight={true} autoPlay={true} showThumbs={false} >
            <div>
                <img className={styles.sliderImg} src={carouselImg1} alt="A dish from our mennu that we serve"/>
            </div>
            <div>
                <img className={styles.sliderImg} src={carouselImg2} alt="A dish from our mennu that we serve"/>
            </div>
        </Carousel>
    )
}

export default Slider
