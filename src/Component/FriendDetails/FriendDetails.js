import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend=useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>Friend Details:{friend.name}</h1>
            <p>Call Him/Her:{friend.phone}</p>
            <h2>Everything you need to know this</h2>
        </div>
    );
};

export default FriendDetails; 