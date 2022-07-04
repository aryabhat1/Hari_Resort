import React from "react"
import "./RentalsStyle.css"
import { Link } from "react-router-dom"
import { useLocation } from "react-router"
import logo from '../../images/logo-resort.png'
import {ConnectButton} from 'web3uikit'

const Rentals = () => {
    const {state: searchFilters} = useLocation();

    return(
        <>
        <div className="topBanner">
            <div>
                <Link to='/'>
                    <img className='logo' src={logo} alt="no image" srcSet="" />
                </Link>
            </div>
            <div className='searchReminder'></div>
            <div className="lrContainers">ConnectButton</div>
        </div>
        <Link to = '/'>Home</Link>
        {/* {searchFilters && } */}
        Rentals
        </>
        ) 
        
}

export default Rentals
