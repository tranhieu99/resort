import React from 'react'

import load from '../images/gif/loading-arrow.gif'
export default function Loading() {
    return (
        <div className = "Loading">
            <img src = {load} alt = "loading"/>
        </div>
    )
}
