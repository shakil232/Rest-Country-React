import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Info from '../Info/Info';
import './CountryDetail.css'
const CountryDetail = () => {
    const { countryName } = useParams()
    const [countryInfo, setCountryInfo] = useState([])
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountryInfo(data))
    }, [])
    return (
        <div>

            <div className="details-header">
                <h1> Country-Details</h1>
            </div>

            <div>
                {
                    countryInfo.map(country => <Info country={country} area={country.area}></Info>)
                }
            </div>

        </div>
    );
};

export default CountryDetail;