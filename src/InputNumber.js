import React from 'react';


const InputNumber = (props) => {
    return <div>
        <p> Number : </p>
        <input type="text" value={props.numberComp} onChange={props.changeNumber} placeholder="Number must between 8-12!" />
        <br />
    </div>;

}
export default InputNumber;