import React, { useState } from 'react';

import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import NavComponent from './components/NavComponent';

function App() {
  let isValid = false;

  const [usersList, setUsersList] = useState([
    {username: 'kike', age: 36},
    {username: 'Emma', age: 3}
  ]);

  const addUserHandler = (user, age) => {
    setUsersList(prevUsers => {
      const userArray = [...prevUsers];
      userArray.unshift({ username: user, age: age });
      return userArray;
    });
  };

  const onDelete = (username) => {
    setUsersList(preUsers => {
      const userArray = preUsers.filter(user => user.username !== username);
      return userArray;
    });
  };

  let content = (
    <div>
      <NavComponent />
      <AddUser onAddUser={addUserHandler} />
      <UsersList onDeleteHandler={onDelete} data={usersList} />
    </div>);

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}

export default App;
