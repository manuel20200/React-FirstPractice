import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
    console.log(props.data);

    const onDeleteItem = () => {
        props.onDelete(props.username);
    };

    return (
        <li onClick={onDeleteItem}>
           <div className="item">
                <h3>UserName: {props.username}</h3>
                <h3>Age: {props.age}</h3>
            </div> 
        </li>
    );
};
export default ListItem;