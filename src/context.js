import React, { Component } from 'react'
import items from './data'
const roomContext = React.createContext();
class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        price: 0,
        maxPrice:0,
        size:0,
        maxSize:0,
        type: 'all',
        capacity: 1,
        breakfast: false,
        pets: false
    }
    componentDidMount(){
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room =>{
           return room.featured === true
        })
        const maxPrice = Math.max(...rooms.map(item => item.price))
        const maxSize = Math.max(...rooms.map(item => item.size))
        this.setState({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
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
    handleChange = event =>{
        const type = event.target.type
        const name = event.target.name
        const value = event.target.value
        console.log(type,name,value)

    }
    render() {
        return (
            <div>
                <roomContext.Provider value = {{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
                    {this.props.children}
                </roomContext.Provider>
            </div>
        )
    }
}
const RoomConsumer = roomContext.Consumer;

export {
    RoomProvider, roomContext, RoomConsumer
};

export function WithRoomConsumer(WrappedComponent){
    return function ConsumerWrapped(props){
        return(
            <RoomConsumer>
            {(value) => <WrappedComponent  {...props} context = {value} /> } 
            </RoomConsumer>
        ) 
    }
}