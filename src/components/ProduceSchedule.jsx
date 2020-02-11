import React from 'react';
import PropTypes from 'prop-types';

function ProduceSchedule(props){
  return (
    <div>
      <p>Month: {props.month} </p>
      <p>Selection: {props.selection} </p>
      <br/>
    </div>
  );
}

ProduceSchedule.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};
export default ProduceSchedule;
