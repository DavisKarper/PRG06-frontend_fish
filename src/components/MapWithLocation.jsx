import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"; // Gebruik MapContainer
import "leaflet/dist/leaflet.css";

function MapWithLocation({ loc }) {
    // Als loc of loc.coordinates niet beschikbaar is, tonen we een foutmelding
    if (!loc || !loc.coordinates) {
        return <div>Locatiegegevens ontbreken</div>;
    }

    const [center, setCenter] = useState([loc.coordinates[0], loc.coordinates[1]]); // Omdraaien van de volgorde
    const [zoom, setZoom] = useState(17);

    useEffect(() => {
        if (loc && loc.coordinates) {
            setCenter([loc.coordinates[0], loc.coordinates[1]]); // Zorg ervoor dat de volgorde juist is
        }
    }, [loc]);

    return (
        <div style={{ height: "400px", width: "100%" }}>
            <MapContainer center={center} zoom={zoom} style={{ height: "100%", width: "100%" }}>
                {/* Voeg de TileLayer toe */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Voeg een Marker toe op de locatie */}
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
