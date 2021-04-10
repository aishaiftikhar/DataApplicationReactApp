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
        <TextLabel className={styles.questions} text={"What are your intrests?"}/>
        <div className = "MutliChoiceOptions">
        <MultiChoiceLabel icon= {<FaReact/>} value ='Outdoors' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Fitness' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Health' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Travel' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Sports' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Theme parks' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Cooking' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Adventure' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Music' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Fashion' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Technology' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Architecture' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Writing' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Gaming' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Dining' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='History' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Theatre' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Networking' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Art' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Politics' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Fishing' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Meet people' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Podcasts' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Gambling' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Self improvement' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Foreign languages' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Movies' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Celebrities' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Dating' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Social media' />
        <MultiChoiceLabel icon= {<FaReact/>} value ='Photography' />
        </div>
        <FooterElement/>
        </form>
    );
    
}

export default InfoPageTwo;