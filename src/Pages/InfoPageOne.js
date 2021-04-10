
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
import './InfoPageOne.css'

export const InfoPageOne = () =>{

    return(
        <form>
        <TextLabel className={styles.mainHeading} text={"digg"}/>
        <ProgressBar value={20} max={100}/>
        <TextLabel className={styles.questions} text={"Why do you want to come to dubai?"}/>
        <div className = "MutliChoiceOptions">
        <MultiChoiceLabel icon= {<FaReact/>} value ='LifeStyle' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Work Opportunities' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Education' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Education' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Finance' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Tourism' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Family' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Business' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Security' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Culture' />
        </div>
        <FooterElement/>
        </form>
    );
    
}

export default InfoPageOne;
