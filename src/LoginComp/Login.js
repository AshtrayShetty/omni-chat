import React, {useState} from "react";
import LoginStyles from './Login.module.css';
import { Link } from "react-router-dom";
import axios from 'axios';

const Login=()=>{

    const [state, setState]=useState({
        username: '',
        password: ''
    });

    const setUsername=(e)=>{
        setState({
            username: e.target.value,
            password: state.password
        });
    }

    const setPassword=(e)=>{
        setState({
            username: state.username,
            password: e.target.value
        })
    }

    const login=(e)=>{
        e.preventDefault();
        axios.post(
            'http://localhost/query-or-mutation', {
            'query': `query RequestTokenSet($login: Login!){
                requestTokenSet(login: $login){
                    accessToken
                    refreshToken
                }
            }`,
            'variables': {
                'login': {
                    'username': state.username,
                    'password': state.password
                }
            }
        }, 
        {
            headers: {'Content-Type': 'application/json'}
        })
        .then(data=>{
            console.log(data);

            sessionStorage.setItem('accessToken', data.data.data.requestTokenSet.accessToken);
            sessionStorage.setItem('refreshToken', data.data.data.requestTokenSet.refreshToken);

            setState({
                username: state.username,
                password: state.password
            });
            
            window.location.href="http://localhost:3000/chat";

        })
        .catch(err=>console.log(err));
    };

    return (
        <div id={LoginStyles.loginMain}>
            <div className={LoginStyles.formDiv} id={LoginStyles.loginForm}>
                <h2>Welcome back!</h2>
                <span id={LoginStyles.greeting}>We're so excited to see you again!</span>
                <form onSubmit={login} method="POST">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={setUsername} required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={setPassword} required/>
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