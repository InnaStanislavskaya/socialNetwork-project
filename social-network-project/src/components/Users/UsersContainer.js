import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers} from '../../Redux/users-reducer';
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getFollowingInProgress} from "../../Redux/users-selectors";
import Users from './Users';



class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }


    render(){

        return <Users totalUsersCount = {this.props.totalUsersCount} 
            pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage}
            onPageChanged ={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}/>
    } 
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


// export default connect(mapStateToProps, 
//     {follow, unfollow, setCurrentPage, 
//     toggleFollowingProgress, getUsers})(UsersContainer);

export default compose(
    
    connect(mapStateToProps, 
        {follow, unfollow, setCurrentPage, 
        toggleFollowingProgress, requestUsers}),
)(UsersContainer)