import React, { useSelector } from 'react'

function mapInvalidAreaMsg({animal,zone}) {

    return (
        <>
            <span>{`${zone} is not a valid place to hunt ${animal}`}</span>
        </>
    )
}

export default mapInvalidAreaMsg;
