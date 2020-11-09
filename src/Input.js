import React from 'react';

const Input = (props) => {
    return <label>
        Masukin Nama :
        <input type="text" value={props.nameComp} onChange={props.changeName} />

    </label>

}

export default Input;