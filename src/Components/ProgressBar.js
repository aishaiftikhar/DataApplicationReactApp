import React from "react";
import PropTypes from "prop-types";
import './ProgressBar.css'

const ProgressBar = ({ value, max }) => {
  return (
    <div class ="container" >
        <span class ="title">Progress</span>
        <progress className = "ProgressBar" value={value} max={max} />
    
  </div>
     
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
};

ProgressBar.defaultProps = {
  max: 100,
};

export default ProgressBar;



/*
import Styled from "styled-components";

const Container = Styled.div`
  
`;

const ProgressBar = ({ value, max, color, width }) => {
  return (
    <Container color={color} width={width}>
      <progress value={value} max={max} />
      <span>{(value / max) * 100}%</span>
    </Container>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string
};

ProgressBar.defaultProps = {
  max: 100,
  color: "lightBlue",
  width: "250px"
};

export default ProgressBar;*/
