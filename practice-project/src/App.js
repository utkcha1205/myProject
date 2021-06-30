// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {

  const[userList , setUserList] = useState([])

  const addUserHandler = (userObj) => {
    setUserList((prevUserList) => {
      return [...prevUserList,{...userObj, id : new Date().getMilliseconds()}]
    })
  } 

  return (
    <div >
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList} />
    </div>
  );
}

export default App;
