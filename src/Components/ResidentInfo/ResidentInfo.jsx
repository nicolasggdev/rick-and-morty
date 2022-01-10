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
    // console.log(residenteInfo)

    return (
        <div>
            <p>{name}</p>
            <p>{status}</p>
            <p>{origin?.name}</p>
            <p>{episode?.length}</p>
            <img src={image} alt={`${name}`} />
        </div>
    )
}

export default ResidentInfo
