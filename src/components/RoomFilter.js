import React, { Component, useContext } from 'react'
import {roomContext} from '../context'
export default function RoomFilter() {
        const context = useContext(roomContext)
        console.log(context)
        return (
            <div>
                Hello from room filter
            </div>
        )
}
