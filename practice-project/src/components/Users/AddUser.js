import React, {useState} from 'react';
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [state , setState] = useState({
        errorPayload:{},
        userPayload : {
            userName : '',
            age : ''
        }
    })

    const addUserHandler = (e) => {
        e.preventDefault();
        if(state.userPayload.userName.trim().length !== 0 && (state.userPayload.age > 1 || state.userPayload.age.trim().length !== 0)){
            props.onAddUser(state.userPayload)
            setState((val) => {
                return {
                    ...val,
                    userPayload:{
                        userName:'',
                        age:''
                    }
                }
            })
        }
        else{
            setState(val => {
                return{
                    ...val,
                    errorPayload:{
                        title: 'Invalid Inputs',
                        message : 'Please Enter Valid Name and Age'
                    }
                }
            })
        }
    }

    const onChangeHandler = (e) => {
        let stateClone = {...state}
        stateClone.userPayload[e.target.id] = e.target.value
        setState(stateClone)
    }

    const errorHandler = () =>{
        setState(val => {
            return{
                ...val,
                errorPayload:{}
            }
        })
    }

    return(
        <React.Fragment>
        {Object.keys(state.errorPayload).length &&
            <ErrorModal title={state.errorPayload.title} message={state.errorPayload.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="userName">UserName</label>
                <input id="userName" type="text" value={state.userPayload.userName}onChange={onChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={state.userPayload.age} onChange={onChangeHandler}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </React.Fragment>
    )
}

export default AddUser;