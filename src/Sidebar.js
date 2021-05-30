import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar className="sidebar_avatar"/>
                <div className="sidebar_input">
                    <SearchIcon/>
                    <input placeholder="Search" />
                </div>
                <IconButton variant="outlined" className="sidebar_inputButton">
                <RateReviewOutlinedIcon></RateReviewOutlinedIcon>
                </IconButton>
               
            </div>
            <div className="sidebar_chats">
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
            </div>
        </div>
    );
};

export default Sidebar;