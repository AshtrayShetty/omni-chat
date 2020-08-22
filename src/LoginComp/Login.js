import React from "react";
import LoginStyles from './Login.module.css';
import { Link } from "react-router-dom";

const Login=()=>{
    return (
        <div id={LoginStyles.loginMain}>
            <div className={LoginStyles.formDiv} id={LoginStyles.loginForm}>
                <h2>Welcome back!</h2>
                <span id={LoginStyles.greeting}>We're so excited to see you again!</span>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required/>
                    <input type="submit" value="Login" id={LoginStyles.loginBtn} style={{backgroundColor: '#7289DA'}} />
                </form>
                <span id={LoginStyles.register}>
                    Need an account? <Link to="/register" style={{color: '#7289DA', textDecoration: 'none'}}>Register</Link> 
                </span>
            </div>
        </div>
    );  
}

export default Login;