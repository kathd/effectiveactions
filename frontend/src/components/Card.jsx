import React from 'react'

const Card = ({id, data}) => {
    return (
        <div id={id}>
            <h2>{data.Name}</h2>
            <p>{data.Summary}</p>
        </div>
    )
}

export default Card
