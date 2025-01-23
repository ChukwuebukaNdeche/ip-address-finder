import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Map from './Map.jsx';
function ContentMap() {
    const [details, setDetails] = useState('')
    const [lat, setLat] = useState(6.2104)
    const [lon, setLon] = useState(7.0747)

    useEffect(() => {
        Axios.get('https://ipapi.co/json/').then(response => {
            const lon = response.data.longitude
            const lat = response.data.latitude
            setDetails(response.data)
            setLat(lat)
            setLon(lon)
            console.log(response.data)
        })
    }, [])
    return (
        <div className="container">
            <div className="row">
            <h1 className="heading">IP Address Finder</h1>
                <div className="col-md-5 left">
                    <div>
                        <h3>What is my IPv4 address?</h3>
                        <h2 className='ip'>{details.ip}</h2>

                        <h3>Approximate location: </h3>
                        <h4>{details.city} {details.region} {details.country_name}</h4>

                        <h3>Internet Service Provider(ISP):</h3>
                        <h4>{details.org}</h4>
                    </div>
                </div>
                <div className="col-md-7 right">
                    <Map lat={lat} lon={lon}/>
                </div>
            </div>
        </div>
    )

}
export default ContentMap