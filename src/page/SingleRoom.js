import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

import {roomContext} from '../context';
export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug: this.props.match.params.slug
        }
    }
    static contextType = roomContext;

    render() {
        const {getRoom} = this.context;
        let room = getRoom(this.state.slug);
        let roomClone = {...room};
    
        return (
            <div>
                <Hero>
                    <Banner title = {roomClone.name} >
                        <Link to  = "/rooms" className="btn-primary"> Back To Rooms</Link>    
                    </Banner>
                </Hero>
            </div>
        )
    }
}
