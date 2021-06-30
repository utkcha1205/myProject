import classes from './UserList.module.css';
import React from 'react';
import Card from '../UI/Card';


const UserList = (props) => { 

    return(
        <Card className={classes.users}>
            <ul>
                {props.users.map((user, index) =>
                    <li key={user.id + index}>{user.userName} ({user.age} Years Old)</li>
                )}
            </ul>
        </Card>
    )
}

export default UserList;