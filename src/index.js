import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const todoTitle = 'Call Family';
const todoDesc = 'rs shonjoy is a full stark web developer.';
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

ReactDOM.render(
    <div>
        <h1 className="headingStyle">{todoTitle}</h1>
        <h3>{todoDesc}</h3>
        <p>{`${dateName} ${monthName} ${currentYear}`}</p>
    </div>,
    document.getElementById('root')
);
