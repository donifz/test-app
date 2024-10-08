/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';


const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

const BannerMap = () => {
  const [coords, setCoords] = useState([]);
  const [markerIcon, setMarkerIcon] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
		import('leaflet').then((L) => {
			const customIcon = new L.Icon({
			  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
			  iconSize: [25, 41],
			  iconAnchor: [12, 41],
			  
			});
			setMarkerIcon(customIcon); // Set custom marker icon once leaflet is loaded
		  });
      try {
        const response = await axios.get(`${BASE_URL_API}/screen`);
        setCoords(response.data.map((item) => ({ ...item, coords: [item.latitude, item.longitude] })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Initial fetch
    fetchData();
  }, []);

  const handlePublish = (location) => {
    console.log(`Do you want to publish this banner at ${location}?`);
  };

  return (
    <>
      {typeof window !== 'undefined' && (
      <>
			{/* @ts-ignore */}
      <MapContainer center={[40.513, 72.806]} zoom={16} style={{ height: '500px', width: '100%' }}>
        {/* @ts-ignore */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        {/* @ts-ignore */}
		  {coords.map((marker, index) => (<Marker key={index} position={marker.coords} icon={markerIcon}>
              <Popup>
                <div>
                  <p>Do you want to publish this banner?</p>
                  <p>on street {marker.address} banner</p>
                  <button onClick={() => handlePublish(marker.address)}>Publish</button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        </>
      )}
    </>
  );
};

export default BannerMap;
