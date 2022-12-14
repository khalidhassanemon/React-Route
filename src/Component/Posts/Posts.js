import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Posts.css';
const Posts = ({post}) => {
    const {id,title,body}=post;
    const navigate=useNavigate();
    const handleNavigate=()=>{
      navigate(`/posts/${id}`);
    }
    return (
        <div className='post'>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <Link to={`/posts/${id}`}>Visit: {id}</Link>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Show Details2</button>
        </div>
    );
};

export default Posts;