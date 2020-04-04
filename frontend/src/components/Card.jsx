import React from 'react'

const Card = ({id, data}) => {
    return (
        <div id={id}>
            <img src={data.Media[0].thumbnails.large.url} />
            <h2>{data.Name}</h2>
            <p>{data.Summary}</p>
            <p><a href={data.Link} target="_blank">Website</a></p>
        </div>
    )
}

export default Card
