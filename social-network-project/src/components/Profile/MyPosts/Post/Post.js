import React from 'react'
import classes from './Post.module.css';

function Post(props) {
    return(
        <div className={classes.item}>
            <img src='https://beze.com.ua/image/cache/data/New-Directory/novi-kartinki/lev-v-koroni-vk-beze-900x600.jpg' alt='avatar'></img>
            {props.message}
            <div className={classes.like}>
                <span>like</span>
                <img src='https://us.123rf.com/450wm/pavlostv/pavlostv1806/pavlostv180600147/102549693-thumb-up-i-like-it-yes-%C3%A2%E2%82%AC%E2%80%9C-stock-vector.jpg?ver=6' alt='like'></img>
                {props.likeCount}
            </div>
        </div>
    )
}

export default Post