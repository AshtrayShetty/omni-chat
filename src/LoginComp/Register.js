import React, { useState } from 'react';
import RegisterStyles from './Login.module.css';
import { Link } from "react-router-dom";
import axios from "axios";

const Register=()=>{

    const [email, setEmail]=useState("");

    const registerUser=(e)=>{
        e.preventDefault();
        setEmail(e.target.email.value);

        axios.post(
            'http://localhost/query-or-mutation', 
            {
                'query': `mutation CreateAccount($account: AccountInput!){
                    createAccount(account: $account)
                }`,
                'variables': {
                    "account": {
                        "username": e.target.username.value,
                        "emailAddress": email,
                        "password": e.target.password.value,
                        "firstName": e.target.username.value.substring(0, e.target.username.value.length/2),
                        "lastName": e.target.username.value.substring(e.target.username.value.length/2, e.target.username.value.length),
                        "bio": ""
                    }
                }
            },
            {
                headers: {"Content-Type": "application/json"}
            }
        ).then(data=>{
            // window.location.href="localhost:3000/login";
            console.log(data);
            axios.post(
                'http://localhost:80/query-or-mutation',
                {
                    'query': `mutation VerifyEmailAddress($emailAddress: String!, $verificationCode: Int!){
                        verifyEmailAddress($emailAddress, $verificationCode)
                    }`,
                    "variables": {
                        "emailAddress": email,
                        "verificationCode": '123456'
                    }
                },
                {
                    headers: {"Content-Type": "application/json"}
                }
            )
            .then(details=>{
                console.log(details);
                window.location.href="http://localhost:3000/verify";
            })
            .catch(err=>console.log(err));
        })
        .catch(err=>console.log(err));
    }

    return(
        <div id={RegisterStyles.loginMain}>
            <div className={RegisterStyles.formDiv}>
                <h2>Create an account</h2>
                <form onSubmit={registerUser} method="POST">
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