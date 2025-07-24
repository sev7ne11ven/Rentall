// src/components/MapComponent.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 

const MapComponent = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13); // Set initial coordinates and zoom level

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    // Add a marker
    L.marker([19.0760, 72.8777]).addTo(map)
      .bindPopup("Hello")
      .openPopup();
  }, []);

  return <div id="map" style={{ height: '100vh'}} />;
};

export default MapComponent;
