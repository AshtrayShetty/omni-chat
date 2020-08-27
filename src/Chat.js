import React from "react";
import Nav from './Nav';
import ChatRoom from './ChatComp/ChatRoom';
import {accessToken} from './LoginComp/Login';
import axios from "axios";

const Chat=()=>{

    axios.post(
        'http://localhost/query-or-mutation',
        {
            'query': `query ReadAccount(){
                readAccount(){
                    username,
                    emailAddress,
                    firstName,
                    lastName,
                    bio
                }
            }`
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            }
        }
    )
    .then(data=>console.log([accessToken, data]))
    .catch(err=>console.log(err));

    return(
        <div>
            <Nav/>
            <ChatRoom/>
        </div>
    );
}

export default Chat;