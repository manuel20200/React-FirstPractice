import React from 'react';
import ListItem from './ListItem';
import classes from './UsersList.module.css';

import Card from '../UI/Card';

const UsersList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.data.map((user, index) => (
                    <ListItem 
                    key={index}
                    username={user.username}
                    age={user.age}
                    onDelete={props.onDeleteHandler}
                    />
                    ))}
            </ul>
        </Card>
    );
};

export default UsersList;