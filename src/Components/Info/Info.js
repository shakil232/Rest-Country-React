import React from 'react';
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
        </div>
    );
};

export default Info;