import React, { useContext } from 'react'
import {roomContext} from '../context'
import Title from '../components/Title'

const getUnique = (items,value) =>{
    return new Set([...items].map(item => item[value] ))
}

export default function RoomFilter({rooms}) {
        const context = useContext(roomContext)
        const {price,maxPrice,maxSize,size,capacity,pets,breakfast,type,handleChange} = context;
        let types = getUnique(rooms, 'type')
        types = ["all", ...types]
        // to jsx
        types = types.map((item,index) =>(
            <option key = {index} >
                {item}
            </option>
        ) );
        let capacities = getUnique(rooms, 'capacity')
        capacities = [...capacities]
        // to jsx
        capacities = capacities.map((item,index)=>(
            <option key = {index}>
                {item}
            </option>
        ));
        return (
            <section className = "filter-room-section baongoai">
                <Title title="Filter rooms"/>
                <form className ="filter-form">
                <div className = 'form-group'> 
                <label>Room Type</label> <br />
                <select
                    name = "type"
                    id="type"
                    className="form-control"
                    onChange={handleChange}
                    >
                    {types}
                </select>
                </div>
                <div className = 'form-group'> 
                <label>{`Max price: ${price}$`}</label> <br/>
                <input type = "range" min = "0" max = {maxPrice} name = "price" value = {price} onChange={handleChange}/>
                </div>
                <div className = 'form-group'> 
                <label>Capacity</label> <br/>
                <select
                    name = "capacity"
                    id="capacity"
                    className="form-control"
                    onChange={handleChange}> 
                    {capacities}    
                </select>      
                </div>
                <div className = 'form-group'> 
                <label>Room size</label> <br/>
                <input type ="number" name = "size" className ="form-control" onChange= {handleChange} placeholder="Min Size" />
                <input type ="number" name = "maxSize" className ="form-control" onChange= {handleChange} placeholder = "Max Size"/>
                </div>                
                </form>
            </section>
        )
}
