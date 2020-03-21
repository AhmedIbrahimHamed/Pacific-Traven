import React from 'react';
import styles from './ToggleModal.module.scss';

function ToggleModal(props) {
    if(props.isModalOpen){
        return (
            <div className={styles.toggleModalContainer}>
                
            </div>
        )
    } else {
        return null;
    }
}

export default ToggleModal
