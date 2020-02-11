import React from 'react';
import PropTypes from 'prop-types';

function MarketSchedule(props){
  return (
    <div>
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
  booth: PropTypes.string
};

export default MarketSchedule;
