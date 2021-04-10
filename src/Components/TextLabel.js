import React from 'react';
import PropType from 'prop-types';
import  './TextLabel.css'

const TextLabel = ({text, className}) =>{

    return(
        <div>
            <label  className="TextLabel">
                <p className = {className}  > {text}</p>
            </label>
        </div>
    );
}

TextLabel.PropType = {

    text: PropType.string.isRequired,
};

TextLabel.defaultProps ={
    text: ''
};
export default TextLabel;