import React from "react"
import loader from '../assets/loader/loader.svg'

export const Loader = () => {
    return (
        <div className='loader'>
            <img src={loader} alt="#"/>
        </div>
    )
}