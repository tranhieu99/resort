import React from 'react'

import { MdLocalBar,MdDirectionsWalk,MdLocalShipping } from "react-icons/md";
import { TiBeer } from "react-icons/ti";


import Title from './Title'
export default class Services extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            services: [
                {
                    icon: <MdLocalBar />, 
                    title: "Free cocktails", 
                    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "
                },
                {
                    icon: <MdDirectionsWalk />, 
                    title: "Endless hiking", 
                    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "
                },
                {
                    icon: <MdLocalShipping />, 
                    title: "Endless hiking", 
                    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "
                },
                {
                    icon: <TiBeer />, 
                    title: "Strong beer", 
                    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "
                }
            ]
        }
    }
    render(){
    return (
        <div className ="__services">
            <Title title = "Services" />
            <div className = "baongoai __services-some">
                {
                this.state.services.map((item,index)=>{
                  return (  <div className = "__services-service" key = {index}>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </div>
                  )
                })
                }
            </div>
        </div>
    )
    }
}
