import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post'


function MyPosts(props) {

    let postsElement = props.postsData.map((post) => <Post message ={post.message} likeCount={post.likeCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value='';
    }

    return (
        <div className={classes.myPosts}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div className={classes.button}>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts