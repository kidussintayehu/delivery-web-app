import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthProvider";


const { setAuth } = useContext(AuthContext);
const navigate = useNavigate();

export const Logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    setAuth({});
    navigate('/home');
}