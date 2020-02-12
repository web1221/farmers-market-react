import React from 'react';
import PropTypes from 'prop-types';

function ProduceSchedule(props){
  function oddEven() {
    return props.evenOdd % 2 ? "#ABE0A0" : "#FEC263"
  }
  let colColor = {
    backgroundColor: oddEven()
  }
  return (
    <div style={colColor} className="market-style">
      <p>Month: {props.month} </p>
      <p>Selection:</p>
      <ul>
      {props.selection.map((crop) =>
        <li>{crop}</li>
      )}
      </ul>
      <br/>
    </div>
  );
}

ProduceSchedule.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array,
  key: PropTypes.number
};
export default ProduceSchedule;
