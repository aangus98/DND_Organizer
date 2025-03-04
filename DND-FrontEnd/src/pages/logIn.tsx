import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/logIn.css";

const LogIn = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    };

    return (
        <div className="log-in">
            <h1>Log In</h1>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" onClick={handleClick}>Log In</button>
            </form>
        <div className="sign-up">
            <p>
            </p>
        </div>
    </div>
    );
};

export default LogIn;