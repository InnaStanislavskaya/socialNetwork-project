import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post'

let postsData = [
    {id: 1, message: "Hello! It is my first post", likeCount: "104"},
    {id: 2, message:  "How are you?", likeCount: "98"},
]

let postsElement = postsData.map((post) => <Post message ={post.message} likeCount={post.likeCount}/>)

function MyPosts() {
    return (
        <div className={classes.myPosts}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div className={classes.button}>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts