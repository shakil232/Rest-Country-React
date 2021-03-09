import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const { name, flag } = props.country
    const history = useHistory()
    const handleDetails = (name) => {
        const url = `/Details/${name}`
        history.push(url);
    }
    return (

        <div>

            <div className="country-info">
                <img src={flag} alt="" />
                <div>
                    <h4 className="text">Name: <span id="name">{name}</span></h4>
                    <p><Link to={`/Details/${name}`}><span className="text">Click To Details</span></Link></p>
                </div>
                <button className="info-btn" onClick={() => handleDetails(name)}>info</button>
            </div>

        </div>

    );
};

export default Country;