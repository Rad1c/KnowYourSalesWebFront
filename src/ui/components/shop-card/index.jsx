/* eslint-disable react/prop-types */
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { ContentContainer, CityHolder, AddressHolder, Container } from "./styled";

const ShopCard = ({ city, address, latitude, longitude }) => {
  return (
    <Container>
      <MapContainer
        center={[latitude, longitude]}
        zoom={14}
        dragging={false}
        zoomControl={false}
        scrollWheelZoom={false}
        style={{ height: "60%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} />
      </MapContainer>
      <ContentContainer>
        <CityHolder>{city}</CityHolder>
        <AddressHolder>{address}</AddressHolder>
      </ContentContainer>
    </Container>
  );
};

export default ShopCard;
