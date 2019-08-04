import React, { Component } from 'react'

const roomContext = React.createContext();
class RoomProvider extends Component {
    state = {
        greeting :"Hello", 
        name: "Hieu"
    }
    render() {
        return (
            <div>
                <roomContext.Provider value = {{...this.state}}>
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
