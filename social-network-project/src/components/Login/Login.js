import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utils/validators';
import { ElementForm } from '../common/FormsControls/FormsControls';
import {connect} from 'react-redux';
import {login} from '../../Redux/auth-reducer';
import {Navigate} from 'react-router-dom';
import classes from "./Login.module.css";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.formLogin}>
            <div>
                <Field placeholder={"Email"} name ={"email"} 
                    validate ={[required]} component ={ElementForm} typeform={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name ={"password"} type={"password"} 
                    validate ={[required]} component ={ElementForm} typeform={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name ={"rememberMe"} 
                    component ={ElementForm} typeform={"input"}/> 
                    remember me
            </div>
            <div>
                <button>Login</button>
            </div>
            {props.error && <div className ={classes.formSummaryError}>
                {props.error}
            </div>}
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Navigate to ={"/profile"}/>
    }

    return <div>
        <h1>Enter the site</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)