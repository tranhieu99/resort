import React from 'react'
import Room from './Room'
import Title from './Title'
export default function RoomList({rooms}) {
    if(rooms.length === 0){
        return <div className="error"><h3 className="empty-room">No such room</h3></div>
    }
        return (
            <>
            <Title title = "Our rooms" />
            <section className = "sorted-room-section baongoai">
                {rooms.map((item,index) => <Room room = {item} key = {index}/>)}
            </section>
            </>
        )
}
