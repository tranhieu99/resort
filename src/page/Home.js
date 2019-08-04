
import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import {RoomProvider} from '../context'
export default class Home extends Component {
    render() {
        return (
            <RoomProvider> 
            <>
            <Hero> 
                <Banner title ="luxurious rooms" subtitle = "deluxe rooms starting at $299">
                    <Link to = "/rooms" className="btn-primary"> Our Rooms </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            </>
            </RoomProvider>
        )
    }
}