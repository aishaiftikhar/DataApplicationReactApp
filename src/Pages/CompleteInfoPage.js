import React from 'react';
import PropType from 'prop-types';
import Button from '../Components/Button';
import Home from '@material-ui/icons/Home';
import {FaReact} from 'react-icons/fa'
import MultiChoiceLabel from '../Components/MultiChoiceLabel';
import ProgressBar from '../Components/ProgressBar';
import TextLabel from '../Components/TextLabel';
import InputLabelCompenent from '../Components/inputLabelComponent';
import CheckBox from '../Components/CheckBox'
import styles from '../Styles/generalStyles.module.css'
import FooterElement from '../Components/FooterElement'

export const CompleteInfoPage = () =>{

    return(
        <form>
        <TextLabel className={styles.mainHeading} text={"digg"}/>
        <ProgressBar value={100} max={100}/>
        <TextLabel className={styles.questions} text={"Complete- Review your application"}/>
        </form>
    );
    
}

export default CompleteInfoPage;