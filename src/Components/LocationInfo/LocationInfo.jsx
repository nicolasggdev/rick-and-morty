import axios from 'axios'
import React, { useEffect, useState } from 'react'

// Styles
import "./LocationInfo.styles.css";

// Componentes
import ResidentsContainer from "../ResidentsContainer/ResidentsContainer.jsx";
import Loader from "../Loader/Loader";

const LocationInfo = () => {

    // Hooks
    const [data, setData] =useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${randomNumber()}`)
        .then(res => {
            setData(res.data)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    },[]);

    // Functions
    const randomNumber = () => Math.floor((Math.random() * 126)+1);

    // Variables
    const {name, type, dimension, residents} = data;


    return (
        <div>
            {
                isLoading ? (
                    <Loader/>
                ) : (
                    <>
                        <div className='location-data'>
                            <h2> {name} </h2>
                            <div>
                                <p> <b>Type: </b> {type} </p>
                                <p> <b>Dimension: </b> {dimension} </p>
                                <p> <b>Population: </b> {residents?.length} </p>
                            </div>
                        </div>
                        {
                            residents?.length !== 0 ? (
                                <ResidentsContainer residents={residents}/>
                            ) : (
                                <p className='population-alert'>There aren't population here</p>
                            )
                        }
                    </>
                )
            }
        </div>
    )
}

export default LocationInfo
