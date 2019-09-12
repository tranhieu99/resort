import React, { Component } from 'react'

import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {roomContext} from '../context';
import defaultImg from '../images/room-1.jpeg'
import StyledHero from '../components/StyledHero'
export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultImg
        }
    }
    static contextType = roomContext;

    render() {
        const {getRoom} = this.context;
        let room = getRoom(this.state.slug);
        if(!room){
            return <div className = 'error'>
                <h3>No such room could be found...</h3>
                <Link to  = "/rooms" className="btn-primary"> Back To Rooms</Link>    
            </div>
        }
        const {name, slug, type, price, size,pets,images,extras, description,breakfast} = room
        return (
            <div>
                <StyledHero img = {images[0] || this.state.defaultImg} >
                    <Banner title = {name} >
                        <Link to  = "/rooms" className="btn-primary"> Back To Rooms</Link>    
                    </Banner>
                </StyledHero>
            
            </div>
        )
    }
}
