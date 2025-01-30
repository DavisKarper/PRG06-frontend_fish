import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapWithLocation({ loc }) {
    if (!loc || !loc.coordinates) {
        return <div>Locatiegegevens ontbreken</div>;
    }

    const [center, setCenter] = useState([loc.coordinates[0], loc.coordinates[1]]);
    const [zoom, setZoom] = useState(4);

    useEffect(() => {
        if (loc && loc.coordinates) {
            setCenter([loc.coordinates[0], loc.coordinates[1]]);
        }
    }, [loc]);

    return (
        <div style={{ height: "400px", width: "100%" }}>
            <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                <Marker position={center}>
                    <Popup>
                        Latitude: {loc.coordinates[0]} <br />
                        Longitude: {loc.coordinates[1]}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default MapWithLocation;
