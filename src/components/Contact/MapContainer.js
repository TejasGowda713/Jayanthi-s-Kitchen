import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const MapContainer = () => {
  window.onload = LoadScript;
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 12.9716,
    lng: 77.5946,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyArs0HdeNXmMaOgPOotcVaaTBx9Gn-fW9g">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
};
export default MapContainer;
