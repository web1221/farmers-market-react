import React from "react";

function NavBar(){
  var navBar = {
    minWidth: "100%",
    backgroundColor: "#749604",
    height: "85px"
  }

var navBarTitle = {
  color: "white",
  fontSize: "28px",
  float: "right",
  paddingRight: "50px",
  paddingTop: "25px"
}

  return (
    <div style={navBar}>
    <span style={navBarTitle}>Farmers Market</span>
    </div>
  );
}
export default NavBar;
