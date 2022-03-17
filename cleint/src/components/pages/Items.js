import React from "react";
import CatagorizedCards from "../CatagorizedCards";
import Footer from '../Footer'
import Navbar from '../Navbar';

function Items() {
    return (
        <>      <Navbar
        value = {
         ["HOME","PRODUCTS","POST PRODUCTS", "ABOUT" ,"CONTACT" ,"LOGIN"]
        }
        />
        <CatagorizedCards />
<Footer />
        </>
      
    )
}
export default Items;
