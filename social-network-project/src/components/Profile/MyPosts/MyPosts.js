import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post'

function MyPosts() {
    return (
        <div className={classes.myPosts}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message ="Hello! It is my first post" likeCount="104"/>
                <Post message= "How are you?" likeCount="98"/>
            </div>
        </div>
    )
}

export default MyPosts