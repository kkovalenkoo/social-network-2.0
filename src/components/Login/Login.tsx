import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../commonComponents/ImprovisedForm/ImprovisedForm";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {InitialStateAuthReducerType, login} from "../../redux/authReducer";
import {AllStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input} validate={[requiredField]}
                       type={'password'}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


const Login = (props: mapDispatchToProps & mapStateToProps) => {

    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
    }

    if (props.state.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type mapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type mapStateToProps = {
    state: InitialStateAuthReducerType
}

const mapStateToProps = (state: AllStateType): mapStateToProps => ({
    state: state.authReducer
})

export default connect(mapStateToProps, {login})(Login)