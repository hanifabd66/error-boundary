import React from 'react';


const InputAddress = (props) => {
    return <div>
        <p> Address : </p>
        <input type="text" value={props.addressComp} onChange={props.changeAddress} placeholder="Min 5 words!" />
        <br />
    </div>;
}
export default InputAddress;