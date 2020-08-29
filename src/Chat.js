import React, { useState, useEffect } from "react";
import Nav from './Nav';
import ChatRoom from './ChatComp/ChatRoom';
import axios from "axios";

const Chat=()=>{

    const [accountDets, setAccountDets]=useState({
        username: '',
        emailAddress: '',
        firstName: '',
        lastName: '',
        bio: ''
    });

    useEffect(()=>{
        axios.post(
            'http://localhost/query-or-mutation',
            {
                'query': `query ReadAccount{
                    readAccount{
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
                    'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
                }
            }
        )
        .then(data=>{
            console.log(data);
            setAccountDets({
                username: data.data.data.readAccount.username,
                emailAddress: data.data.data.readAccount.emailAddress,
                firstName: data.data.data.readAccount.firstName,
                lastName: data.data.data.readAccount.lastName,
                bio: data.data.data.readAccount.bio
            });
        })
        .catch(err=>console.log(err));
    }, []);

    return(
        <div>
            <Nav username={accountDets.username}/>
            <ChatRoom/>
        </div>
    );
}

export default Chat;