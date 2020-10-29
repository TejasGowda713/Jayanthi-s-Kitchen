import React, { useState, useEffect } from "react";
import L from "leaflet";
import "./MapContainer.css";
import "leaflet/dist/leaflet.css";

function MapContainer() {
  useEffect(() => {
    var mapOptions = {
      // center: [12.9716, 77.5946],
      center: [12.446432, 75.932858],
      zoom: 16,
    };
    // Creating a map object
    var map = new L.map("map", mapOptions);

    // Creating a Layer object
    var layer = new L.TileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    });

    // Adding layer to the map
    map.addLayer(layer);

    var iconOptions = {
      iconUrl: "/images/logo.jpeg",
      iconSize: [50, 50],
    };
    // Creating a custom icon
    var customIcon = L.icon(iconOptions);

    // Creating Marker Options
    var markerOptions = {
      title: "MyLocation",
      clickable: true,
      draggable: false,
      icon: customIcon,
    };
    // Creating a Marker
    var marker = L.marker([12.446432, 75.932858], markerOptions);

    // Adding popup to the marker
    marker.bindPopup("Jayanthi's Kitchen").openPopup();

    // Adding marker to the map
    marker.addTo(map);
  }, []);

  return <div className="map" id="map"></div>;
}

export default MapContainer;
