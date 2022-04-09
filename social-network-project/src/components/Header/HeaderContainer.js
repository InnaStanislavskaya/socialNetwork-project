import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {SetAuthUserData} from "../../Redux/auth-reducer";
import { authAPI } from '../../api/api';


class HeaderContainer extends React.Component {
    componentDidMount(){
        authAPI.me()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.SetAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {SetAuthUserData}) (HeaderContainer);