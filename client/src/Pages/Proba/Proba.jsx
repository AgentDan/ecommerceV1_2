import React from 'react'
import { useParams } from "react-router-dom"

const Proba = () => {
    const {path} = useParams()
    return (
        <div>
            {path}
            {process.env.PUBLIC_URL}
        </div>
    )
}

export default Proba;