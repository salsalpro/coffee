'use client'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MyMap() {

    const position = ['35.664237', '51.177125']

    return (
        <MapContainer center={position} zoom={50} scrollWheelZoom={false} className="overflow-hidden w-full h-80 rounded-lg border">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}
