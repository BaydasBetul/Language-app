import React from 'react'
import "./Header.css"
import { FaPhoenixSquadron } from 'react-icons/fa';
const Header = () => {
    return (
        <div className="big-title">
            <p>Created by <FaPhoenixSquadron style={{color: 'orange', fontSize: '20px'}}/>BetyByd</p>
            <h1>Languages</h1>
        </div>
    )
}

export default Header