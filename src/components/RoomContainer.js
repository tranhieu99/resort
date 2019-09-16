import React from 'react'

import Loading from '../components/Loading'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {WithRoomConsumer} from '../context'

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} = context;
    if(loading){
     return <Loading />
    }
    return (
            <>
                <RoomFilter rooms = {rooms}/>
                <RoomList rooms = {sortedRooms}/>
            </>
        )
}

export default WithRoomConsumer(RoomContainer)