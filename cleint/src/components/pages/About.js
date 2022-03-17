import React from "react";
import Navbar from '../Navbar';

function About(){
return(
    <>      <Navbar
    value = {
     ["HOME","PRODUCTS","POST PRODUCTS", "ABOUT" ,"CONTACT" ,"LOGIN"]
    }
    />

    <h1>About</h1>
    </>
)
}
export default  About
