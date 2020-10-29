import React from 'react';

const Greeting = (props) => {

    return (
        <div>
            <p onClick={props.changeParagraph}>Hallo My name is {props.name} age: {props.age} </p>
            <h1>{props.children}</h1>
        </div>
    )
}

export default Greeting