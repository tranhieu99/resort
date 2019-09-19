import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

export default function Room({room}) {
const {name, price, images, slug } = room
const roomLink = `/rooms/${slug}`
    return (
        <div className = "featured__room">
            <img src = {images[0]} alt = {name} />
            <div className = "featured__room-price-top"> ${price}</div>
            <Link to = {roomLink} className="btn-primary featured__room-btn"  > Featured Room </Link> 
            <p className ="featured__room-name">{name}</p>
        </div>
    )
}

Room.propTypes = {
    name: PropTypes.string,
    slug: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number
}