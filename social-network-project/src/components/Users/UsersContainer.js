import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers} from '../../Redux/users-reducer'
import Users from './Users';
import {withAuthRedirect} from '../../hoc/AuthRedirect';


class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress
    }
}


// export default connect(mapStateToProps, 
//     {follow, unfollow, setCurrentPage, 
//     toggleFollowingProgress, getUsers})(UsersContainer);

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, 
        {follow, unfollow, setCurrentPage, 
        toggleFollowingProgress, getUsers}),
)(UsersContainer)