import React from 'react';

const CardBook = (props) => {

    return (
        <div>
            <h3>Title : {props.titleComp}  </h3>
            <small>  Desc : {props.descComp}</small>
            <h3>Author : {props.authorComp}</h3>
            <hr />

        </div>
    )
}

export default CardBook;