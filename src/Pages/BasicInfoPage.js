import React from 'react';
import PropType from 'prop-types';
import Button from '../Components/Button';
import Home from '@material-ui/icons/Home';
import {FaReact} from 'react-icons/fa'
import MultiChoiceLabel from '../Components/MultiChoiceLabel';
import InfoPage from './InfoPage';
import TextLabel from '../Components/TextLabel';
import {Switch, Route,BrowserRouter, Link} from "react-router-dom";
import {browserHistory} from "react-router";
import InputLabelCompenent from '../Components/inputLabelComponent';
import CheckBox from '../Components/CheckBox'
import styles from '../Styles/generalStyles.module.css'
import DropDownItem from '../Components/DropDownItem'
import './BasicInfoPage.css'
import InfoPageOne from './InfoPageOne';

export const BasicInfoPage = () =>{

    return(
        <form>
        <TextLabel className={styles.mainHeading} text={"digg"}/>
        <TextLabel className={styles.subHeading} text={"Apply Now to work in Dubai"}/>
        <InputLabelCompenent label="First Name" type="text" />
        <InputLabelCompenent label="Last Name" type="text" />
        <InputLabelCompenent label="Date of Birth" type="text" />
        <InputLabelCompenent label="User Name" type="text" />
        <TextLabel className={styles.underLabel} text={"Gender"}/>
        <div className ="CheckBoxList">
        <CheckBox label="Male"/>
        <CheckBox label="Female"/>
        <CheckBox label="Other"/>
        </div>
        <DropDownItem label="Nationality" />
        <DropDownItem label="Country of residence" />
        <TextLabel className={styles.questions} text={"How we can contact you?"}/>
        <InputLabelCompenent label="Contact number" type="nymber" />
        <InputLabelCompenent label="Email adress" type="email" />
        <Button value="Apply Now"/>
        </form>
    );
    
}

export default BasicInfoPage;
