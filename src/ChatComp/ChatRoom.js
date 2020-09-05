import React, { useState, useEffect } from 'react';
import MessagesView from './MessagesView';
import MessageInput from './MessageInput';
import LayoutStyles from './Nav.module.css';
import axios from 'axios';

const ChatRoom=()=>{

    const [messages, setMessages]=useState([]);

    useEffect(()=>{
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
                        readChats{
                            id
                            messages(last: 20){
                                edges{
                                    node{
                                        messageId,
                                        sender{username},
                                        isForwarded,
                                        hasStar,
                                        ... on TextMessage{
                                            message
                                        },
                                        ... on PollMessage{
                                            poll{
                                                title,
                                                options{
                                                    option,
                                                    votes
                                                }
                                            }
                                        }
                                    },
                                    cursor
                                },
                                pageInfo{hasPreviousPage}
                            },
                            ... on PrivateChat{
                                user{
                                    id,
                                    username
                                }
                            },
                            ... on GroupChat{
                                title,
                                description,
                                adminIdList
                            },
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
            .then(data=>{
                // console.log(data);
                setMessages(data.data.data.readChats);
            })
            .catch(err=>console.log(err));
        };
    
        socket.addEventListener('message', data=>console.log(data));
        
    }, []);

    return(
        <div className={LayoutStyles.mainLayout}>
            <MessagesView messages={messages}/>
            <MessageInput/>
        </div>
    );
}

export default ChatRoom;