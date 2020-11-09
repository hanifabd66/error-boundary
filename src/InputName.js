import React from 'react';


const InputName = (props) => {
    console.log(props)
    return <div  >
        <p>Name:</p>
        <input className="input" type="text" value={props.nameComp} onChange={props.changeName} placeholder="Min 5 words!" />
        <br />
    </div>;
}
export default InputName;