import React from 'react';
import PropType from 'prop-types';
import './DropDown.css';
export const DropDownItem = ({label}) =>{
    return(
        <div className="DropDownIteam">
            <select>
                <option selected value ="">{label}</option>
                <option value ="UAE">UAE</option>
                <option value ="Pakistan">Pakistan</option>
                <option value ="India">India</option>
            </select>
        </div>
    );
}

DropDownItem.PropType = {
};

DropDownItem.defaultProps ={
};

export default DropDownItem