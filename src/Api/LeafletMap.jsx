import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export default function LeafletMap({ style, city, hotelName }) {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setPosition([data[0].lat, data[0].lon]);
        }
      });
  }, [city]);

  if (!position) return null;

  return (
    <MapContainer
      center={position}
      zoom={20}
      style={style}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Tooltip
            direction="top"
            offset={[0, -10]}
            opacity={1}
            permanent
        >
            {hotelName}
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}

