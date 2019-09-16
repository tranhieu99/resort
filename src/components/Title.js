import React from 'react'
import PropType from 'prop-types'
export default function Title({title}) {
    return (
        <div className="section-title">
            <h2> {title}</h2>
            <div className = "divider"></div>
        </div>
    )
}
Title.PropType = {
    title: PropType.string.isRequired
}