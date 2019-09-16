import React, { Component } from 'react'
import items from './data'
const roomContext = React.createContext();
class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }
    componentDidMount(){
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room =>{
           return room.featured === true
        })
        this.setState({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false
        })
    }
    formatData = (items) => {
        const tempItems = items.map(item =>{
            const id = item.sys.id
            const images = item.fields.images.map(image =>{
             return image.fields.file.url
            })
            const rooms = {...item.fields,images,id}
            return rooms
        })
        return tempItems
    }
    getRoom = (slug) => {
        const rooms = [...this.state.rooms]
        const roomSlug = rooms.find(room => room.slug === slug)
        return roomSlug
    }
    render() {
        return (
            <div>
                <roomContext.Provider value = {{...this.state, getRoom: this.getRoom}}>
                    {this.props.children}
                </roomContext.Provider>
            </div>
        )
    }
}
const roomConsumer = roomContext.Consumer;

export {
    RoomProvider, roomContext, roomConsumer
};

export function WithRoomConsumer(WrappedComponent){
    return function(props){
        <RoomProvider>
        <roomConsumer>
            {(value) => <WrappedComponent  {...props} value = {value} /> } 
        </roomConsumer>
        </RoomProvider>
    }
}