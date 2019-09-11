import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner';
export default class Rooms extends Component {
    render() {
        return (
           <Hero hero = "roomsHero" >
               <Banner title="Our Rooms">
               <Link to = "/" className="btn-primary"> Return home </Link>
               </Banner>
           </Hero>
        )
    }
}
