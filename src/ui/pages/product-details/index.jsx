/* eslint-disable react/prop-types */
import {
  Container,
  ProductMapContainer,
  ProductCardContainer,
  Title,
  MapContainerWrapper,
} from "./styled";
import MainMenu from "../../components/main-menu";
import ProductDetails from "../../components/product-details";
import ProductCard from "../../components/product-card";
import Footer from "../../components/footer";
import { useColor } from "../../../hooks/useColors";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const productsFromCategory = [
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
];

const productsFromShop = [
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "c8200fb8-a86c-44f9-9934-e2c238b33bb3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
];

const position = [44.77108, 17.20588];

const Product = ({ role }) => {
  const { primaryColor, searchColor } = useColor(role);

  return (
    <Container>
      <MainMenu backgroundColor={primaryColor} searchColor={searchColor} role={role} />
      <ProductMapContainer>
        <ProductDetails />
        <MapContainerWrapper>
          <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%", zIndex: "1" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Sport Vision</Popup>
            </Marker>
          </MapContainer>
        </MapContainerWrapper>
      </ProductMapContainer>
      <div>
        <Title>Još popusta iz ove kategorije</Title>
        <ProductCardContainer>
          {productsFromShop.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              discount={product.discount}
              productImg={product.productImg}
              commerceImg={product.commerceImg}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              validFrom={product.validFrom}
              validTo={product.validTo}
            />
          ))}
        </ProductCardContainer>
      </div>
      <div>
        <Title>Još popusta iz ove trgovine</Title>
        <ProductCardContainer>
          {productsFromCategory.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              discount={product.discount}
              productImg={product.productImg}
              commerceImg={product.commerceImg}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              validFrom={product.validFrom}
              validTo={product.validTo}
            />
          ))}
        </ProductCardContainer>
      </div>
      <Footer />
    </Container>
  );
};

export default Product;
