import React from 'react';
import RegisterStyles from './Login.module.css';
import { Link } from "react-router-dom";

const Register=()=>{
    return(
        <div id={RegisterStyles.loginMain}>
            <div className={RegisterStyles.formDiv}>
                <h2>Create an account</h2>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" required/>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required/>
                    <input type="submit" value="Register" id={RegisterStyles.loginBtn} style={{backgroundColor: '#7289DA'}} />
                </form>
                <span id={RegisterStyles.register}>
                    <Link to="/" style={{color: '#7289DA', textDecoration: 'none'}}>Already have an account?</Link> 
                </span>
            </div>
        </div>
    );
}

export default Register;