import React from 'react'

function SchoolBoard(props) {
    let fontStyle = {
        fontStyle: "Roboto"
    }
    return (
        <tr style={fontStyle}>
            <td> {props.ID}</td>
            {props.category ? (<td>{props.category}</td>) : (<td>-</td>)}
            < td >{props.post}</td >
        </tr>
    )
}

export default SchoolBoard