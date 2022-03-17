import React, { useRef, useEffect, useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./accountContext";
import axios from 'axios'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { route } from "express/lib/application";
// import Home from "../../pages/Home";
import { LoginForm } from "./loginForm";
// import { role } from "../../../../../back-end/app/models";

export function SignupForm() {

  const USER_REGEX = /^[A-z][A-z0-9 -_]{3,23}$/
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
  // const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const USER_TYPE = ['admin', 'user']

  const { switchToSignin } = useContext(AccountContext);

  const [username, setUsername] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('')
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [roles, setRoles] = useState('')
  const [validRole, setValidRole] = useState(false);
  const [roleFocus, setRoleFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  const userRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    const USER_REGEX = /^[A-z][A-z0-9 -_]{3,23}$/
    setValidName(USER_REGEX.test(username));
  }, [username])

  useEffect(() => {
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  useEffect(() => {
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd])

  useEffect(() => {
    const USER_TYPE = ['admin', 'user']

    setValidRole(USER_TYPE[0] === roles.toLowerCase() || USER_TYPE[1] === roles.toLowerCase());
  }, [USER_TYPE, roles])

  useEffect(() => {
    setErrMsg('');
  }, [username, password, email])


  function sendUserInput() {

    const v1 = USER_REGEX.test(username);
    const v2 = PWD_REGEX.test(password);

    // roles = roles.toLowerCase()
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }


    const Url = 'http://10.6.159.101:8080/api/auth/signup'
    const headers = {
      'Content-Type': 'application/json',
    };

    axios.post(Url, {
      username: username,
      email: email,
      password: password,
      roles: roles.toLowerCase()
    }, { headers }).then(function (response) {
      console.log(response)
      setSuccess(true);
      setUsername('');
      setPassword('');
      setMatchPwd('');
      setRoles('')
      return response
    }).catch(function (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else if (err.response?.status === 404) {
        setErrMsg('No data is given');
      } else if (err.response?.status === 400) {
        setErrMsg('Username or Email already in use or role doesnot exists');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed')
      }
      errRef.current.focus();

    })
  }


  //   const Url = 'http://localhost:8080/api/auth/signup'
  //   const headers = {
  //     'Content-Type': 'application/json',
  //   };

  //   axios.post( Url, {
  //     username: username,
  //     email: email,
  //     password: password,
  //     role: roles
  //   }, { headers })
  //     .then(function (response) {
  //       console.log(response)
  //       return response
  //       setSuccess(true);
  //       setUsername('');
  //       setPassword('');
  //       setMatchPwd('');
  //       setRoles('')

  //     }).catch(console.log)
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendUserInput()

  }

  return (
    <>
      {success ? (
        <LoginForm value='successfully registered' />

      ) : (
        <BoxContainer>
          <FormContainer onSubmit={handleSubmit}>
            <p ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive">
              {errMsg}
            </p>
            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validName || !username ? "hide" : "invalid"} />
            <Input
              type="text"
              onChange={e => setUsername(e.target.value)}
              placeholder="Full Name"
              ref={userRef}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} className='fontawosome' />
              4 to 24 characters.<br />
              Must begin with a letter.<br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />

            <Input
              type="email"
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              Example of valid email id <br />
              mysite@ourearth.com<br />
              my.ownsite@ourearth.org<br />
              mysite@you.me.net<br />
            </p>
            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hide" : "invalid"} />

            <Input
              type="password"
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p id="uidnote" className={pwdFocus && password && !validPwd ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.<br />
              Must include uppercase and lowercase letters, a number and a special character.<br />
              Allowed special characters:
              <span aria-label="exclamation mark">!</span>
              <span aria-label="at symbol">@</span>
              <span aria-label="hashtag">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="percent">%</span>
            </p>

            {/* <FontAwesomeIcon icon={faCheck} className={validMatch ? "valid" : "hide"} /> */}
            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />

            <Input
              type="password"
              onChange={e => setMatchPwd(e.target.value)}
              placeholder="Confirm Password"
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirm the password"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p id="uidnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              password doesnot match
            </p>

            <FontAwesomeIcon icon={faCheck} className={validRole ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validRole || !roles ? "hide" : "invalid"} />

            <Input
              type="text"
              onChange={e => setRoles(e.target.value)}
              placeholder="ROLE : ADMIN OR USER"
              required
              aria-invalid={validRole ? "false" : "true"}
              aria-describedby="add role"
              onFocus={() => setRoleFocus(true)}
              onBlur={() => setRoleFocus(false)}
            />
            <p id="uidnote" className={roleFocus && roles && !validRole ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              write admin or user
            </p>
            <SubmitButton
              disabled={!validName || !validPwd || !validMatch || !validRole ? true : false}
              type="submit"
            >
              Signup
            </SubmitButton>
            {/* <button className="mybutton"
         disabled={!validName || !validPwd || !validMatch || !validRole ? true : false }
>
Signup
</button> */}
            <MutedLink
              href="#"
              onClick={switchToSignin}>
              Already have an account?
              <BoldLink
                href="#"
              >
                Signin
              </BoldLink>
            </MutedLink>
          </FormContainer>
        </BoxContainer>
      )}
    </>
  )
}
