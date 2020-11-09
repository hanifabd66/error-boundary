import React from 'react'

const Card = (props) => {

    return (
        < div className="card" >
            <img src={props.avatar} alt="Avatar" style={{
                width: "80 %"
            }} />
            <div className="container" >

                <input value={props.name} onChange={props.changeName} style={{ textAlign: 'center' }} />
                <br />
                <input value={props.age} onChange={props.changeAge} style={{ textAlign: 'center' }} />

                <h4><b>{props.name}</b></h4>
                <p>{props.title}</p>
                <p><b>{props.age}</b></p>
                {/* {props.children} */}
                <button className="button " onClick={props.onDelete}>DELETE</button>
            </div>
        </div >
    )
}

export default Card;