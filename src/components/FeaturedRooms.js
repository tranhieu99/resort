import React, { Component } from 'react'

import {roomContext} from '../context'
export default class FeaturedRooms extends Component {
    static contextType = roomContext;
    render() {
    const {greeting, name} = this.context;
        return (
            <div>
            </div>
        )
    }
}
