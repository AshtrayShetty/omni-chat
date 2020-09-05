import React, { useState, useEffect } from 'react';
import Member from './Member';
import groupStyle from './UserStats.module.css';
import axios from 'axios';


const Groups=(props)=>{
    useEffect(()=>{
        const accountsSocket=new WebSocket(`ws://localhost:80/accounts-subscription?access_token=${localStorage.getItem('oneTimeToken')}`);
    
        accountsSocket.addEventListener('open', ()=>{
            accountsSocket.send(JSON.stringify({
                'query': `subscription SubscribeToAccounts{
                    subscribeToAccounts{
                        ... on CreatedSubscription{placeholder}
                        ... on UpdatedAccount{
                            userId
                            username
                        }
                        ... on NewContact{
                            username
                        }
                        ... on DeletedContact{id}
                    }
                }`
            }));
    
            axios.post(
                'http://localhost/query-or-mutation',
                {
                    'query': `query ReadContacts($first: Int){
                        readContacts(first: $first){
                            edges{
                                node{username}
                                cursor
                            },
                            pageInfo{hasNextPage}
                        }
                    }`,
                    'variables': {'first': 0}
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
                    }
                }
            )
            // .then(data=>console.log(data))
            .catch(err=>console.log(err));
        });
    
        accountsSocket.onmessage=data=>console.log(data);
        accountsSocket.onclose=()=>console.log("closed accounts subscription");
    }, []);
    
    const [groups, setGroups]=useState([]);

    const createChat=title=>{
        axios.post(
            'http://localhost/query-or-mutation',
            {
                'query': `mutation CreateGroupChat($chat: GroupChatInput!){
                    createGroupChat(chat: $chat)
                }`,
                'variables': {
                    'chat': {
                        'title': "Pelican Room",
                        'description': "Room",
                        'userIdList': [],
                        'adminIdList': [],
                        'isBroadcast': true,
                        'publicity': 'PUBLIC'
                    }
                }
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
            if(title==='GROUPS'){
                setGroups([...groups, data.data.data.createGroupChat]);
                console.log(groups);
            }else{
                console.log('success');
            }
        })
        .catch(err=>console.log(err));
    };

    return(
        <div>
            <div className={groupStyle.group}>
                <span>{props.title}</span>
                <button onClick={createChat(props.title)}>+</button>
            </div>
            <div className={groupStyle.groupList}>
                <Member firstName={'Jeremy'} lastName={'Firow'}/>
            </div>
        </div>
    );
}

export default Groups;