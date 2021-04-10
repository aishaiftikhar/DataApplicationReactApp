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
import './InfoPageFive.css'

export const InfoPageFive = () =>{

    return(
        <form>
        <TextLabel className={styles.mainHeading} text={"digg"}/>
        <ProgressBar value={80} max={100}/>
        <TextLabel className={styles.questions} text={"What is your level of education?"}/>
        <div className = "MutliChoiceOptions">
        <MultiChoiceLabel icon= {<FaReact/>} value ='High school or less' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Collage' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Diploma' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Batchelors' />
        </div>
        <FooterElement/>
        </form>
    );
    
}

export default InfoPageFive;