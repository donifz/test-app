/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Custom marker icon (optional, can use default Leaflet marker)


// Function to fetch address based on latitude and longitude using Nominatim
const fetchAddress = async (lat, lon) => {
  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
  const data = await response.json();
  return data.display_name;
};

const LedScreenForm = ({ initialData = {type:'',address:'',longitude:'', latitude:''}, onSubmit }) => {
  const [markerIcon, setMarkerIcon] = useState(null);

  const [formData, setFormData] = useState({
    type: initialData.type || '',
    address: initialData.address || '',
    longitude: initialData.longitude || '',
    latitude: initialData.latitude || '',
  });
  useEffect(() => {
    // Dynamically import leaflet on the client side
    import('leaflet').then((L) => {
      const customIcon = new L.Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        
      });
      setMarkerIcon(customIcon); // Set custom marker icon once leaflet is loaded
    });
  }, []);

  const [markerPosition, setMarkerPosition] = useState(null); // State to track marker position

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
	setFormData({type:"", address: "", longitude: "", latitude: "",})
  };

  // Map click handler to place a marker and update the form
  const MapClickHandler = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setMarkerPosition([lat, lng]); // Set the marker position when the map is clicked

        const address = await fetchAddress(lat, lng);

        setFormData((prevData) => ({
          ...prevData,
          latitude: lat.toString(),
          longitude: lng.toString(),
          address,
        }));
      },
    });

    return null;
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-6 text-center">LED Screen Form</h2>

        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-semibold mb-2">Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="longitude" className="block text-gray-700 font-semibold mb-2">Longitude</label>
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="latitude" className="block text-gray-700 font-semibold mb-2">Latitude</label>
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="mb-4 h-64">
			{/* @ts-ignore */}
          <MapContainer center={[40.513, 72.806]} zoom={13} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClickHandler />
			{/* @ts-ignore */}
            {markerPosition && <Marker position={markerPosition} icon={markerIcon} />} {/* Show marker if position is set */}
          </MapContainer>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LedScreenForm;
