import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friends from '../Friends/Friends';


const Friend = () => {
    const friend=useLoaderData();
    console.log(friend);
    return (
        <div>
            <h2>I have Totall number of friends are:{friend.length}</h2>
           {
            friend.map(fnd=>
            <Friends
                key={fnd.id}
                fnd={fnd}
                ></Friends>)
           }
        </div>
    );
};

export default Friend;