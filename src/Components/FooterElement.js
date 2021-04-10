import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import './FooterElement.css'
import styles from '../Styles/generalStyles.module.css'

import TextLabel from'./TextLabel'
const FooterElement = () => {

    return (
        <div className ="footer">
            <span className="backLink">
            <TextLabel className={styles.linkLabel} text={"Back"}/>
            </span>
            <span className= "nextButton">
                <Button value="Next"/></span>
        </div>
        );
  
};
FooterElement.propTypes = {
  classes: PropTypes.object.isRequired
};


export default FooterElement;