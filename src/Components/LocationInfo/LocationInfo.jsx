import axios from 'axios'
import React, { useEffect, useState } from 'react'

// Styles
import "./LocationInfo.styles.css"

// Componentes
import ResidentsContainer from "../ResidentsContainer/ResidentsContainer.jsx"

// Helpers


const LocationInfo = () => {

    // Hooks
    const [data, setData] =useState({});

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${randomNumber()}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[]);

    // Functions
    const randomNumber = () => Math.floor((Math.random() * 126)+1);

    // Variables
    const {name, type, dimension, residents} = data;

    return (
        <div>
            <div>
                <h2> Location Name: {name} </h2>
                <div className='location-data'>
                    <h3> Type: {type} </h3>
                    <h3> Dimension: {dimension} </h3>
                    <h3> Population: {residents?.length} </h3>
                </div>
            </div>
            <ResidentsContainer residents={residents}/>
        </div>
    )
}

export default LocationInfo
