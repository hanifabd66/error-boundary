import React from 'react';

const InputAge = (props) => {
    return <label>
        <br />
        Masukin Umur :
        _<input type="text" value={props.ageComp} onChange={props.changeAge} />

    </label>

}

export default InputAge;