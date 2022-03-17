// import React, { useContext } from "react";
import React from "react";
import {
//   BoldLink,
  BoxContainer,
  FormContainer,
  Input,
//   MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
// import { AccountContext } from "./accountContext";

export function Products(props) {
//   const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Location" />
        <Input type="text" placeholder="Price" />
        <Input type="text" placeholder="Size" />
        <Input type="text" placeholder="Composition" />
        <Input type="file" placeholder="Upload picture" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Post</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      {/* <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink> */}
    </BoxContainer>
  );
}