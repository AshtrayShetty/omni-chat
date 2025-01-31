import React, { useState } from 'react';
import Groups from './Groups';
import userStats from './UserStats.module.css';
import axios from 'axios';
// import { gql } from 'apollo-boost';

const UserStatus=(props)=>{

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