import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
            
        </div>
    );

  return (
    <div className='sidebar'> 
        <div className="sidebar__top">
            <img 
                src="https://images.unsplash.com/photo-1508615070457-7baeba4003ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c29saWR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt=""/>    
            <Avatar src = {user.photoUrl} className = 'sidebar__avatar'/>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>                
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,448</p>   
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar