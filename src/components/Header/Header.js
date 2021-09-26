import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h2>Bangladesh Film Development Corporation (BFDC)</h2>
            <p>16 Rd Number 8, Dhaka 1216, Bangladesh</p>
            <h5><small className="top-actor">Top 16</small> Best Female Actors In Bangladesh</h5>
            <h3>Total Female Actors Here : <small className="actor-person">16 Person</small></h3>
        </div>
    );
};

export default Header;