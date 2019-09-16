import React, { Component } from 'react'

import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {WithRoomConsumer} from '../context'

class RoomContainer extends Component {
    render() {
        console.log(value)
        return (
            <>
                
                <RoomFilter/>
                <RoomList/>
            </>
        )
    }
}

export default WithRoomConsumer(RoomContainer)