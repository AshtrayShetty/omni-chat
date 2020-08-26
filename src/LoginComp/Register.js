import React from 'react';
import RegisterStyles from './Login.module.css';
import { Link } from "react-router-dom";
import axios from "axios";

const Register=()=>{

    // const registerUser=(e)=>{
    //     axios.post('http://localhost/query-or-mutation', {
    //             'query': `mutation CreateAccount($account: AccountInput!){
    //                 createAccount(account: $acccount)
    //             }`,
    //             'variables': `{
    //                 "account": {
    //                     "username": ${e.target.username.value},
    //                     "emailAddress": ${e.target.email.value},
    //                     "password": ${e.target.password.value},
    //                     "firstName": "John",
    //                     "lastName": "Doe",
    //                     "bio": ""
    //                 }
    //             }`
    //         },
    //         {
    //             headers: {"Content-Type": "application/json"}
    //         }
    //     ).then(data=>{
    //         e.preventDefault();
    //         console.log(data);
    //     })
    //     .catch(err=>{
    //         e.preventDefault();
    //         window.location.href="localhost:3000/chat";
    //         console.log(err);
    //     });
    // }

    return(
        <div id={RegisterStyles.loginMain}>
            <div className={RegisterStyles.formDiv}>
                <h2>Create an account</h2>
                {/* onSubmit={registerUser} */}
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