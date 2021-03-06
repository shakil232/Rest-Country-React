import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'

const Home = () => {
    const [ countries, setCountries] = useState([])
    useEffect( ()=>{
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url)
        .then( res => res.json())
        .then( data => setCountries(data))
    },[])
    return (
        <div >
            <h1 className="header"> Rest-Country</h1>
            <nav>
                <a href="home"> Home</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>
            </nav>
            {
                countries.map( country => <Country country={country}></Country>)
            }
         
        </div>
    );
};

export default Home;