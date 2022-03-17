import React, { useEffect, useRef, useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";

import { useNavigate, useLocation } from 'react-router-dom';

import { AccountContext } from "./accountContext";
import axios from 'axios'
import useAuth from "./useAuth";

export function LoginForm(props) {
  const { setAuth } = useAuth()

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const { switchToSignup } = useContext(AccountContext);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errmsg, setErrMsg] = useState('')


  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [username, password])

  function sendUserInputToBeChecked() {
    const Url = 'http://10.6.159.101:8080/api/auth/signin'
    const headers = {
      'Content-Type': 'application/json',
      withCredentials: true
    };
    axios.post(Url, {
      username: username,
      password: password
    }, { headers })
      .then(function (response) {
        console.log(response?.data);
        console.log(response);
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        console.log(roles)
        setAuth({ username, password, roles, accessToken });
        setUsername('');
        setPassword('');
        console.log(from)
        navigate(from, { replace: true });
        return response
      }).catch(function (err) {
        console.log(!err?.response, 'checking')
        if (!err?.response) {
          setErrMsg('No Server Response');
        } else if (err.response?.status === 404) {
          setErrMsg('Missing Username or Password');
        } else if (err.response?.status === 404) {
          setErrMsg('user not found');
        } else if (err.response?.status === 401) {
          setErrMsg('invalid password');
        } else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus();
      }
      )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendUserInputToBeChecked()
  }

  return (

    <BoxContainer>

      <FormContainer onSubmit={handleSubmit}>
        <p ref={errRef}
          className={errmsg ? "errmsg" : "offscreen"}
          aria-live="assertive">
          {errmsg}
        </p>

        <p className="success" >{props.value}</p>
        <Input
          type="text"
          placeholder="Full name"
          onChange={e => setUsername(e.target.value)}
          ref={userRef}
          required />
        <Input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}

        />
        {/* <Marginer direction="vertical" margin={10} /> */}
        <MutedLink href="#">Forget your password?</MutedLink>
        <SubmitButton
          type="submit"
        >
          Signin
        </SubmitButton>
        <MutedLink
          href="#"
          onClick={switchToSignup}>
          Don't have an accoun?
          <BoldLink href="#">
            Signup
          </BoldLink>
        </MutedLink>
      </FormContainer>
    </BoxContainer>
  )
}