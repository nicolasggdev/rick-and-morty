import React from 'react'

// Styles
import "./ResidentsContainer.styles.css";

// Components
import ResidentInfo from "../ResidentInfo/ResidentInfo.jsx";

const ResidentsContainer = ({residents}) => {

    // Functions
    const key = param => {
        const id = param.lastIndexOf("/") + 1;
        const cut = param.slice(id);
        return cut;
    }

    return (
        <div className='residents-title'>
            <h4>Residents</h4>
            <>
                {
                    residents?.map(resident => <ResidentInfo resident={resident} key={key(resident)}/>)
                }
            </>
        </div>
    )
}

export default ResidentsContainer
