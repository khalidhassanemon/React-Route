import React from 'react';
import { Link } from 'react-router-dom';
import './Friends.css';

const Friends = ({fnd}) => {
    const {name,email,username,id}=fnd;
    return (
        <div className='friend'>
            <h1>Name:{name}</h1>
            <p>Email:{email}</p>
            <p><small>UserName: <Link to={`/friends/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Friends;