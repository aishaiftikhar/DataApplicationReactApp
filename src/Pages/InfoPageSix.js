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

export const InfoPageSix = () =>{

    return(
        <form>
        <TextLabel className={styles.mainHeading} text={"digg"}/>
        <ProgressBar value={90} max={100}/>
        <TextLabel className={styles.questions} text={"When you can join your new postion?"}/>
        <div className = "MutliChoiceOptions">
        <MultiChoiceLabel icon= {<FaReact/>} value ='Right now' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='o to 3 Months' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='3 to 6 months' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='6 to 12 months' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='After 1 year' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Im not sure' />
        </div>
        <FooterElement/>
        </form>
    );
    
}

export default InfoPageSix;