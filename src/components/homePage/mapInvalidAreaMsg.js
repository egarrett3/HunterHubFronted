import React, { useSelector } from 'react'

const areaDescription = season => {
    return season === 'general' ? 'Unit' : 'Hunt Number';
}

function mapInvalidAreaMsg({animal,zone,season}) {
    
    return (
        <div className="invalid-area-container">
            {`${areaDescription(season)}${' '}${zone} 
             is not a valid place to hunt ${animal}`}
        </div>
    )
}

export default mapInvalidAreaMsg;
