import React, { useState, useRef } from 'react';

import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [isValidUser, setIsValidUser] = useState(true);
    const [isValidAge, setIsValidAge] = useState(true);
    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setIsValidUser(false);
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valida name and age (non-empty values).'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username:</label><br />
                    <input 
                        id="username" 
                        ref={nameInputRef}
                        name="username" 
                        type="text"></input><br />
                    <label htmlFor="age">Age:</label><br />
                    <input 
                        id="age" 
                        ref={ageInputRef}
                        name="age" 
                        type="number"></input><br />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;