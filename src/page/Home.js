
import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner'

export default class Home extends Component {
    render() {
        return (
            <Hero > 
                <Banner title ="luxurious rooms" subtitle = "deluxe rooms starting at $299">
                    <Link to = "/rooms" className="btn-primary"> Our Rooms </Link>
                </Banner>
                
            </Hero>
        )
    }
}
