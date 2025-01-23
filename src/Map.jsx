import React, {useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import marker icons


// Create a custom Leaflet icon
const customIcon = L.icon({
    iconUrl: `${process.env.PUBLIC_URL}/marker-icon.png`, // Use the path from the public folder
  shadowUrl: `${process.env.PUBLIC_URL}/marker-shadow.png`, // Use the path from the public folder
    iconSize: [25, 41], // Default size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Popup anchor point relative to the iconAnchor
    shadowSize: [41, 41], // Size of the shadow
  });


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
                <Marker position={[lat, lon]} icon={customIcon}>
                    <Popup>
                        A pretty popup! <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
export default Map