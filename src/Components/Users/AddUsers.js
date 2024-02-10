import React, { useState } from 'react';
import Card from '../Card/Card'
// import Button from './Button.js';
import classes from './AddUser.module.css'

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = event => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label>Username</label>
      <input type="text" value={enteredUsername} onChange={usernameChangeHandler} />
      <label>Age (Years)</label>
      <input type="number" value={enteredAge} onChange={ageChangeHandler} />
      <button type="submit">Add User</button>
    </form>
   </Card>
   
  );
};

export default AddUser;