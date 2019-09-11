import React, { Component } from 'react'

import {roomContext} from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'
export default class FeaturedRooms extends Component {
    static contextType = roomContext;
    render() {
    let {loading,featuredRooms} = this.context;
    const rooms = featuredRooms.map((room, id) =>
         <Room room = {room} key = {id} />
        )
        return (
            <div className = "featured baongoai ">
                <Title title = "Featured Rooms" />
                <div className = "featured__list">
                {rooms}
                </div>
              { loading &&  <Loading />} 
            </div>
        )
    }
}
