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
        const inputName = event.target.name
        const value = type === 'checkbox' ? event.target.checked : event.target.value
        this.setState({
            [inputName]: value
        }, this.filterRoom )
    }

    filterRoom = () =>{
        const {
            rooms,
            price,
            maxPrice,
            size,
            maxSize,
            type,
            capacity,
            breakfast,
            pets
        } = this.state
        // Get all rooms
        let tempRooms =[...rooms]
        // Filter by type
        if(type !== 'all' ){
            tempRooms = [...tempRooms.filter(item => item.type == type )];
        }
        // Filter by capacity
        if(capacity !== 1){
            tempRooms = [...tempRooms.filter(item => item.capacity == capacity )];
        }
        // Filter by price
        if(price !== maxPrice){
            tempRooms = [...tempRooms.filter(item => item.price <= price )];
        }
        if(size && maxSize){
            tempRooms = [...tempRooms.filter(item => item.size >= size && item.size <= maxSize )];

        }
        this.setState({
            sortedRooms: tempRooms
        })
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