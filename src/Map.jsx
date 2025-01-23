import React, {useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function UpdateCenter({ lat, lon }) {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lon]); // Dynamically update the center
    }, [lat, lon, map]);
    return null;
}


function Map({ lat, lon }) {


    return (
        <div className='map'>
            <MapContainer
                center={[lat, lon]} // Coordinates for the map's center
                zoom={10}               // Initial zoom level
                style={{ height: "70vh", width: "100%" }} // Map size
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Update the center dynamically */}
                <UpdateCenter lat={lat} lon={lon} />
                {/* Marker with a popup */}
                <Marker position={[lat, lon]}>
                    <Popup>
                        A pretty popup! <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
export default Map