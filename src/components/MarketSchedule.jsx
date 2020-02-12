import React from 'react';
import PropTypes from 'prop-types';


function MarketSchedule(props){
    function oddEven() {
      if (props.evenOdd % 2 === 0) {
      return "#FEC263"
    } else {
      return "#ABE0A0"
    }
  }
    let colColor = {
      backgroundColor: oddEven()
    }
    return (
      <div style={colColor} className="market-style">
      <p>Day: {props.day} </p>
      <p>Location: {props.location} </p>
      <p><em>{props.hours}</em></p>
      <p><em>{props.booth}</em></p>
      <br/>
      </div>
    );
}

MarketSchedule.propTypes = {
  location: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string,
  key: PropTypes.number
};

export default MarketSchedule;
