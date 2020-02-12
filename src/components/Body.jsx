import React from "react";
import ScheduleList from "./ScheduleList";
import ProduceList from "./ProduceList";

function Body(){
  var colBorder = {
    border: "1px"
  }
  return (
    <div className="Body">
    <div className="row">
    <div className="col-md-6">
    <ScheduleList />
    </div>
    <div className="col-md-6">
    <ProduceList />
    </div>
    </div>
    </div>
  );
}

export default Body;
