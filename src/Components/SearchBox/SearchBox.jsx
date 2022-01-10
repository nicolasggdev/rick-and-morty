import axios from 'axios';
import React, { useState } from 'react'

// Styles
import "./SearchBox.styles.css";

const SearchBox = () => {

    // Hooks
    const [filterType, setFilterType] = useState("");
    const [filter, setFilter] = useState("")

    // Functions
    const data = () => {
        axios.get(`https://rickandmortyapi.com/api/character/?${filterType}=${filter}`)
        .then(res => console.log(res.data)) // PENDIENTE, YA ME CONECTA CON LA API CORRECTAMENTE, AHORA DEBO MOSTRAR LA INFORMACION
        .catch(err => console.log(err))
    }

    const search = filterType => {
        if(filterType === "name"){
            return <input type="text" placeholder='Write the name of character' onChange={e => setFilter(e.target.value)}/>
        } else if (filterType === "status"){
            return (
                <select onChange={e => setFilter(e.target.value)}>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
            )
        } else if (filterType === "species"){
            return <input type="text" placeholder='Write the name of species' onChange={e => setFilter(e.target.value)}/>
        } else if (filterType === "gender"){
            return (
                <select onChange={e => setFilter(e.target.value)}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            )
        }
    }
    
    return (
        <div>
            <span>Filter by </span>
            <select onChange={ e => setFilterType(e.target.value)}>
                <option value="name">Name</option>
                <option value="status">Status</option>
                <option value="species">Species</option>
                <option value="gender">Gender</option>
            </select>
            <>
                {
                    search(filterType)
                }
            </>
            <button onClick={data}>Search</button>
        </div>
    )
}

export default SearchBox
