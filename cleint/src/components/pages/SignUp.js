import "../../App.css";
import styled from "styled-components";
import { AccountBox } from "../login page/accountBox/index";
import Footer from "../Footer";
import Navbar from '../Navbar';
// import { SignupForm } from "../login page/accountBox/signupForm";
import { AccountContext } from "../login page/accountBox/accountContext";
// import { route } from "express/lib/application";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function signUp() {
  return (
      <>  <Navbar
      value = {
       ["HOME","PRODUCTS","POST PRODUCTS", "ABOUT" ,"CONTACT" ,"LOGIN"]
      }
      />
    <AppContainer>
      <AccountBox />
    </AppContainer>
    <Footer />
    </>
  );
}

export default signUp;