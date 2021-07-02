import React, { useEffect, useState  ,useReducer, useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

const emailReducer = (state,action) =>{
  if(action.type  === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type  === 'BLUR_INPUT'){
    return {value: state.value, isValid: state.value.includes('@')}
  }
  
  return {value: '', isValid:false}
  
}


const passwordReducer = (state,action) =>{
  if(action.type  === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type  === 'BLUR_INPUT'){
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
  
  return {value: '', isValid:false}
  
}


const Login = (props) => {
  const authctx = useContext(AuthContext)
  const [formIsValid, setFormIsValid] = useState(false);
  const[emailState,dispatchEmail] = useReducer(emailReducer, {value: '', isValid:null})
  const[passwordState,dispatchPassword] = useReducer(passwordReducer, {value: '', isValid:null})

  const {isValid :emailValid} = emailState
  const {isValid :passwordValid} = passwordState

  useEffect(() => {
    let validate = setTimeout(() =>{
      setFormIsValid(
        emailValid && passwordValid
      );
    },500)
    return () =>{
      clearTimeout(validate)
    }
  },[emailValid,passwordValid])

  const emailChangeHandler = (e) => {
    dispatchEmail({type: 'USER_INPUT', val : e.target.value})

  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({type: 'USER_INPUT', val : e.target.value})

  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'BLUR_INPUT'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'BLUR_INPUT'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
