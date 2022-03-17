import "../../App.css";
import styled from "styled-components";
import Footer from "../Footer";
import { PostItem } from "../login page/accountBox/post";
import Navbar from '../Navbar';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Post() {
  return (
      <>     <Navbar
      value = {
       ["HOME","PRODUCTS","POST PRODUCTS", "ABOUT" ,"CONTACT" ,"LOGIN"]
      }
      />

    <AppContainer>
      <PostItem/>
    </AppContainer>
    <Footer />
    </>
  );
}

export default Post;