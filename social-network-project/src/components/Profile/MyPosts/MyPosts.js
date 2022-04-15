import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators';
import { ElementForm } from '../../common/FormsControls/FormsControls';




function MyPosts(props) {

    let postsElement = props.postsData.map((post) => <Post message ={post.message} key ={post.id} likeCount={post.likeCount}/>)

    let onAddPost = (value) => {
        props.addPost(value.newPostText);
    }

    return (
        <div className={classes.myPosts}>
            <h2>My posts</h2>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <Field name={"newPostText"} component ={ElementForm} typeForm={"textarea"} placeholder={"Write a new post"}
                    validate ={[required, maxLength10]}/>
            <div className={classes.button}>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)

export default MyPosts