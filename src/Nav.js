import React, {useState} from 'react';
import NavStyles from './ChatComp/Nav.module.css';
import UserStatus from './UserStatusComp/UserStatus';
import GroupInfo from './GroupComp/GroupInfo';

const Nav=()=>{

    const [profileView, setProfileView]=useState(false);
    const [groupView, setGroupView]=useState(false);

    const getProfileView=()=>{
        if(groupView){setGroupView(false);}
        setProfileView(!profileView);
    }

    const getGroupView=()=>{
        if(profileView){setProfileView(false);}
        setGroupView(!groupView);
    }

    return(
        <div>
            <UserStatus profileView={profileView}/>

            <nav className={NavStyles.layout}>

                <div style={{display: 'flex', alignItems: 'baseline'}}>
                    <h2 style={{color: 'rgb(114, 115, 118)'}}>#</h2>
                    <div className={NavStyles.chatMeta}>
                        <h2 className={NavStyles.roomName} style={{color: 'white'}}>Pelican room</h2>
                        <div className={NavStyles.membersMeta}>
                            <span>6 members</span>
                            <button>+ Add member</button>
                        </div>
                    </div>
                </div>

                <div>
                    <ul className={NavStyles.listFeatures}>
                        <li>i1</li>
                        <li style={{borderRight: "1px solid rgb(51, 53, 57)"}}>i2</li>
                        <li style={{borderLeft: "1px solid rgb(51, 53, 57)"}}>i3</li>
                        <li onClick={getProfileView}>i4</li>
                        <li onClick={getGroupView}>i5</li>
                    </ul>
                </div>

            </nav>

            <GroupInfo groupView={groupView}/>
        </div>
    );
}

export default Nav;