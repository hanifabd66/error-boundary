import React from 'react';

const Greeting = (props) => {
    return (
        <div>
            {/* <p onClick={props.changeParagraph}>Hallo My name is {props.name} age: {props.age} </p>
            <h1>{props.children}</h1> */}
            <p >Hello World! My name is {props.nameComp} and I am {props.ageComp} years old.</p>
            {/* <button onClick={props.clickParagraph}>Submit</button> */}
        </div>

    )
}

export default Greeting;