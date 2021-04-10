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
import './InfoPageFour.css'

export const InfoPageFour = () =>{

    return(
        <form>
        <TextLabel className={styles.mainHeading} text={"digg"}/>
        <ProgressBar value={2} max={100}/>
        <TextLabel className={styles.questions} text={"Do You have financial savings?"}/>
        <div className = "MutliChoiceOptions">
        <MultiChoiceLabel icon= {<FaReact/>} value ='No savings' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='0 to 1000 aed' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='1000 to 5000 aed' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='5000 to 10,000 aed' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='10,000 to 20,000 aed' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='20,000 to 50,000 aed' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='+50,000 aed' />
        </div>
        <FooterElement/>
        </form>
    );
    
}

export default InfoPageFour;