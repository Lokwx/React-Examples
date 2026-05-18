import React from 'react';

function ToDoList1(props) {
    const person = {
        name: "Wei Xiong",
        theme: {
            backgroundColor: 'Black',
            color: 'Pink',
        }
    };

    return (
        <div style={person.theme}>
            <h1>{person.name}</h1>
            <img className='logo'
                 src="https://react.dev/images/docs/scientists/7vQD0fPs.jpg"
                 alt="Gregorio Y. Zara"/>
            <ul>
                <li>Improve the website</li>
                <div><u>Improve his skills</u></div>
                <b>
                <u>Testing all the web components</u>
                </b>
            </ul>
        </div>
    );
}

export default ToDoList1;