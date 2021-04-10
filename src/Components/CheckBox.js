import React from 'react';
import PropType from 'prop-types';
import './CheckBox.css';

export const CheckBox = ({ label}) =>{

    return(
        <div className="CheckBox">
            <input className="CheckBoxInput" type = "checkbox" name = "test"/> 
            <label className="CheckBoxLabel">{label}</label>
            
        </div>
    );
}

CheckBox.PropType = {
};

CheckBox.defaultProps ={
};

export default CheckBox;
