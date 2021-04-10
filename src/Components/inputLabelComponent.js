import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core'

import { withStyles } from "@material-ui/core/styles";
import './inputLabelComponent.css'

const InputLabelComponent = ({ type, label }) => {

  const [data, setvalue] =useState(null);
  function getValue(value){
    setvalue(value.target.value);
    console.warn(data)
    console.log({})
  }
  return (
    <div>
    <input className="TextField"
    type={type}
      onChange={getValue}
      required=""
      ></input>
      <label className="InputLabel">{label}</label>
      </div>
    );
};
InputLabelComponent.propTypes = {
  classes: PropTypes.object.isRequired
};


export default InputLabelComponent;
