import React from 'react';
import PropType from 'prop-types';
import './Button.css'

export const Button = ({styleClass, value}) =>{

    return(
        <div className="buttonClass">
        <button  className="Button">
         {value}
        </button>
        </div>
    );
}

Button.PropType = {

    styleClass: PropType.string,
    value: PropType.string.isRequired,
 //   onclick: PropType.func.isRequired
};

Button.defaultProps ={
 styleClass: 'btn-primary'
};

export default Button;
