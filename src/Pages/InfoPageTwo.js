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
import './InfoPageTwo.css'

export const InfoPageTwo = () =>{

    return(
        <form>
        <TextLabel className={styles.mainHeading} text={"digg"}/>
        <ProgressBar value={2} max={100}/>
        <TextLabel className={styles.questions} text={"What industries would you prefer to work in?"}/>
        <div className = "MutliChoiceOptions">
        <MultiChoiceLabel icon= {<FaReact/>} value ='Construction' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Hospitality' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Real estate' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Tourism' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Manufacturing' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Farming' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Fishing' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Education' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Public Services' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Adminstration' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Technology' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Media' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Financial services' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Legal' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Health care' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Government' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Medical' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Security' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Logistics' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Robotics' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Fashion' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Automotive' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Transportation' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Customer support' />
        </div>
        <FooterElement/>
        </form>
    );
    
}

export default InfoPageTwo;