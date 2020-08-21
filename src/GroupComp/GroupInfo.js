import React from 'react';
import GroupMember from './GroupMember';
import GroupInfoStyles from './GroupInfo.module.css';

const GroupInfo=(props)=>{
    return(
        <div 
            className={GroupInfoStyles.mainLayout} 
            id={props.groupView?GroupInfoStyles.showGroupInfo:''}
        >
            <div className={GroupInfoStyles.groupLayout}>
                <h2 style={{color: 'white'}}>Group Info</h2>
                <span>Created 2/22/2016</span>
            </div>
            
            <div className={GroupInfoStyles.groupName}>
                <span>MEMBERS - 26</span>
                <GroupMember firstName={'Jeremy'} lastName={'Firow'} position={'admin'} online={true}/>
                <GroupMember firstName={'Emil'} lastName={'Anders'} position={''} online={false}/>
                <GroupMember firstName={'Markus'} lastName={'Gavrilov'} position={'moderator'} online={false}/>
                <GroupMember firstName={'Patricia'} lastName={'Ribeiro'} position={''} online={true}/>
                <GroupMember firstName={'Kevin'} lastName={'Kalde'} position={''} online={false}/>
                <GroupMember firstName={'Victor'} lastName={'Pacheco'} position={''} online={true}/>
            </div>
        </div>
    );
}

export default GroupInfo;