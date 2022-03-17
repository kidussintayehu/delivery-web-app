import React from "react";
import Navbar from '../Navbar';

function Order(){

return(
    <>   <Navbar
    value = {
     ["HOME","PRODUCTS","POST PRODUCTS", "ABOUT" ,"CONTACT" ,"LOGIN"]
    }
    />

    <h1>order</h1>
    </>
)
}
export default  Order;
