import axios from 'axios';
import React, { useEffect, useState } from 'react'

// Styles
import "./ResidentInfo.styles.css";

const ResidentInfo = ({resident}) => {

    const [residenteInfo, setResidentInfo] = useState({})

    useEffect(() => {
        axios.get(`${resident}`)
        .then(res => setResidentInfo(res.data))
        .catch(err => console.log(err))
    },[resident])

    // Variables
    const {name, image, status, origin, episode} = residenteInfo

    return (
        <div className='card'>
            <img src={image} alt={`${name}`} />
            <p><b>Name: </b> {name}</p>
            <p><b>Status: </b> {status}</p>
            <p><b>Origin: </b> {origin?.name}</p>
            <p><b>Episodes where appear: </b> {episode?.length}</p>
        </div>
    )
}

export default ResidentInfo
