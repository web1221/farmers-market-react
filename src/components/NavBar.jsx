import React from "react";
import Banner from './banner.jpg';
function NavBar(){

 var image = {
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover",
   width: "100%",
   

 }

  return (
    <div>
    <img src={Banner} alt="banner" style={image} />
    </div>
  );
}
export default NavBar;
