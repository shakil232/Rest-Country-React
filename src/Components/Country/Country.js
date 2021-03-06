import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const { name, flag } = props.country
     const history = useHistory()
     const handleDetails = (name) =>{
         const url = `/country/${name}`
        history.push(url);       
     }
    return (

        <div className="country ">
            <div className="country-info ">
                <img src={flag} alt=""/>
                <h2 className="text"> Country-Name: <span id="name">{name}</span></h2>
                <p><Link to={`/country/${name}`}><span className="text">Click To Details</span></Link></p>
                <button className="info-btn" onClick={()=>handleDetails(name)}>info</button>
                
            </div>
            
        </div>


    );
};

export default Country;