import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Posts from '../Posts/Posts';

const Post = () => {
    const posts=useLoaderData();
    console.log(posts);
    return (
        <div>
            <h3>A lot of FB Posts are Here</h3>
            {
                posts.map(post=><Posts 
                    key={post.id}
                    post={post}
                    ></Posts>)
            }
        </div>
    );
};

export default Post;