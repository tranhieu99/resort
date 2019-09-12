import React, { Component } from 'react'

import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {roomContext} from '../context';
import defaultImg from '../images/room-1.jpeg'
import StyledHero from '../components/StyledHero'
import Title from '../components/Title'
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
        const {name,capacity ,price, size,pets,images,extras, description,breakfast} = room;
        let randomImage = Math.floor(Math.random() * (images.length));
        return (
            <>
                <StyledHero img = {images[randomImage] || this.state.defaultImg} >
                    <Banner title = {name} >
                        <Link to  = "/rooms" className="btn-primary"> Back To Rooms</Link>    
                    </Banner>
                </StyledHero>
                <Title title = {`${name} images`} />
                <div className="single-room-images baongoai">
                        {images.map((image,index) => <div className="single-room-images__image"  key = {index}> <img src = {image} alt ={name} className="responsive-img"/> </div>)}
                </div>
                <section className = "single-room-information baongoai">
                    <article className="single-room-information__left">
                        <h2>Detail</h2>
                        <p>{description}</p>
                    </article>
                    <article className="single-room-information__right">
                        <h2>Info</h2>
                        <p>Price : ${price}</p>
                        <p>Size : ${size} SQFT</p>
                        <p>{capacity > 1 ? `Capacity: ${capacity} people` : "Capacity: 1 person"}</p>
                        <p> {pets ? "Pets allowed" : "No pets allowed"} </p>
                        <p>{breakfast && "Break fast include"}</p>
                    </article>
                </section>
                <section className = "single-room-extras baongoai">
                    <h3>Extras</h3>
                    <ul>
                        {extras.map((item,index) => <li key = {index}>- {item} </li> )}
                    </ul>
                </section>
            </>
        )
    }
}
