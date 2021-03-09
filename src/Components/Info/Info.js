import React from 'react';
import { Link } from 'react-router-dom';
import './Info.css'

const Info = (props) => {
    const { flag, name, capital, region, population } = props.country
    return (
        <div className="info-container mt-5">
            <div className="info-flag">
                <img src={flag} alt=""/>
            </div>
            <div>
                <h3>Name: {name} </h3>
                <h6> Capital: {capital}</h6>
                <p>Region: {region}</p>
                <p>Population: {population}</p>
            </div>
            <Link to ="/countries"><button className="info-btn"> Home</button></Link>
        </div>
    );
};

export default Info;