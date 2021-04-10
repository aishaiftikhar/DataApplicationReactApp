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
import './InfoPage.css'

export const InfoPage = () =>{

    return(
        <form className="InfoPage">
        <TextLabel className={styles.mainHeading} text={"digg"}/>
        <ProgressBar value={10} max={100}/>
        <TextLabel className={styles.questions} text={"Have you ever visted Dubai?"}/>
        <div className = "MutliChoiceOptions">
        <MultiChoiceLabel icon= {<FaReact/>} value ='No' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Yes' />
        </div>
        <TextLabel className={styles.questions} text={"Do you have any friends or family in Dubai?"}/>
        <div className = "MutliChoiceOptions">
        <MultiChoiceLabel icon= {<FaReact/>} value ='No' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Yes' />
        </div>
        <TextLabel className={styles.questions} text={"How long do you want to stay in Dubai?"}/>
        <div className = "MutliChoiceOptions">
        <MultiChoiceLabel icon= {<FaReact/>} value ='Upto 3 months' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='3 to 6 months' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='6 to 12 months' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='+12 months' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='+3 years' />
        </div>
        <FooterElement/>
        </form>
    );
    
}

export default InfoPage;