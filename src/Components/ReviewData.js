import React from 'react';
import PropType from 'prop-types';
import TextLabel from './TextLabel';
import styles from '../Styles/generalStyles.module.css'
import {Link} from 'react-router-dom';

import "./ReviewData.css"

export const ReviewData = () =>{

    return(
        <div className="ReviewData">

            <TextLabel className={styles.reviewHeading} text={"Basic Information"}/>
            <TextLabel className={styles.reviewSubHeading} text={"Basic Information :"}/>

        </div>
    );
    
}

export default ReviewData;
