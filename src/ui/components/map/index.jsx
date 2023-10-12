/* eslint-disable react/prop-types */
import { MapContainerWrapper, HelperText } from "./styled"
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import { useEffect, useState } from "react"

const MapElement = ({ cityPosition, marker }) => {

  const [markerPosition, setMarkerPosition] = useState();
  const [mapPosition, setMapPosition] = useState(cityPosition);

  useEffect(() => {
    setMapPosition(cityPosition)
  }, [cityPosition, mapPosition])

  function AddMarkerOnClick() {
    useMapEvents({
      click(e) {
        setMarkerPosition(e.latlng);
        marker(e.latlng);
      },
    });

    return null;
  }

  return(
    <>
      <MapContainerWrapper>
        <MapContainer
          center={mapPosition}
          zoom={12}
          scrollWheelZoom
          style={{ height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markerPosition && (
            <Marker position={markerPosition}>
              <Popup>
                Latitude: {markerPosition.lat.toFixed(6)} 
                Longitude: {markerPosition.lng.toFixed(6)}
              </Popup>
            </Marker>
          )}
          <AddMarkerOnClick />
        </MapContainer>
      </MapContainerWrapper>
      {!markerPosition && <HelperText>Lokacija na mapi je obavezna</HelperText>}
    </>
  )
}

export default MapElement