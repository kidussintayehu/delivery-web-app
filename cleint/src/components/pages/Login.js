import "../../App.css";
import styled from "styled-components";
import { DefualtIndexLogin }  from "../login page/accountBox/defualtIndexLogin";
import Footer from "../Footer";
import Navbar from '../Navbar';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Login() {
  return (
      <>  <Navbar
      value = {
       ["HOME","PRODUCTS","POST PRODUCTS", "ABOUT" ,"CONTACT" ,"LOGIN"]
      }
      />
    <AppContainer>
      <DefualtIndexLogin />
    </AppContainer>
    <Footer />
    </>
  );
}

export default Login;