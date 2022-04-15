import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../utils/validators';
import { ElementForm } from '../common/FormsControls/FormsControls';


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name ={"login"} 
                    validate ={[required]} component ={ElementForm} typeForm={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name ={"password"} 
                    validate ={[required]} component ={ElementForm} typeForm={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name ={"rememberMe"} 
                    validate ={[required]} component ={ElementForm} typeForm={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login