import React from 'react';
import PropType from 'prop-types';
import './MultiChoiceLabel.css'
import {FaReact} from 'react-icons/fa'
export const MultiChoiceLabel = ({value, icon}) =>{

    return(
        <span className ="MultiChoiceLabel">
            <label  className="Icon" onClick={() => alert('Hello')}>
                {icon}
            </label>
            <label  className="Label" onClick={() => alert('Hello')}>
                {value}
            </label>
        </span>
    );
}

MultiChoiceLabel.PropType = {

   //styleClass: PropType.string,
    value: PropType.string.isRequired,
    icon: PropType.element.isRequired
 //   onclick: PropType.func.isRequired
};

MultiChoiceLabel.defaultProps ={
 //styleClass: 'btn-primary'
};

export default MultiChoiceLabel;
