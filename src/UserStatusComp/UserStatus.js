import React from 'react';
import Groups from './Groups';
import userStats from './UserStats.module.css';
import axios from 'axios';
// import { gql } from 'apollo-boost';

const UserStatus=(props)=>{

    window.addEventListener('load', ()=>{
        let socket=new WebSocket(`ws://localhost:80/messages-subscription?access_token=${localStorage.getItem('oneTimeToken')}`);
    
        socket.onopen=()=>{
            socket.send(JSON.stringify({
                'query': `subscription SubscribeToMessages{
                    subscribeToMessages{
                        ... on CreatedSubscription{placeholder}
                        ... on NewMessage{
                            senderId,
                            text
                        }
                    }
                }`
            }));

            axios.post(
                'http://localhost/query-or-mutation',
                {
                    'query': `query ReadChats{
                        __type(name: "MessagesConnection"){
                            fields{
                                name
                                type{
                                    name
                                    kind
                                    ofType{
                                        name
                                        kind
                                    }
                                }
                            }
                        }
                    }`
                },
                {
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
                    }
                }
            )
            .then(data=>console.log(data))
            .catch(err=>console.log(err));
        };
    
        socket.addEventListener('message', data=>console.log(data));
        
    });

    return(
        
        <div 
            className={userStats.notifications} 
            id={props.profileView?userStats.showProfile:''}
        >
            <div className={userStats.searchBar}>
                <form action="#">
                    <input type="submit" value="Q" className={userStats.searchButton}/>
                    <input type="text" placeholder="Search" className={userStats.textField}/>
                </form>
            </div>

            <Groups title={"DIRECT MESSAGES"}/>
            <Groups title={"GROUPS"}/>

            <div className={userStats.user}>
                <div className={userStats.userMeta}>
                    <span className={userStats.userId}>#420</span>
                    <span className={userStats.userName}>{props.username}</span>
                </div>
                <span>#</span>
            </div>
        </div>
    );
}

export default UserStatus;