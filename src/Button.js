import React from 'react';

const Button = (props) => {
    return (
        // < button onClick={props.button} disabled={props.name < 1 || props.alamat < 1} > Submit</button >
        <button className="buttonT" onClick={props.handleSubmit} disabled={props.disabled} > Submit </button >
    )
}

export default Button;