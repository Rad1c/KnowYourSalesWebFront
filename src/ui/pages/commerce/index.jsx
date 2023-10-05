/* eslint-disable react/prop-types */
import {
  Container,
  ShopContainer,
  BtnAddShop,
  Title,
  ShowItems,
  BtnAddProduct,
} from "./styled";
import MainMenu from "../../components/main-menu";
import ProductCard from "../../components/product-card";
import ShopCard from "../../components/shop-card";
import CommerceUserSection from "../../components/commerce-user-section";
import Footer from "../../components/footer";
import { useState } from "react";
import { useColor } from "../../../hooks/useColors";

const shops = [
  { city: "Sarajevo", address: "Dobrinja 1" },
  { city: "Sarajevo", address: "Dobrinja 1" },
  { city: "Sarajevo", address: "Dobrinja 1" },
  { city: "Sarajevo", address: "Dobrinja 1" },
  { city: "Sarajevo", address: "Dobrinja 1" },
  { city: "Sarajevo", address: "Dobrinja 1" },
  { city: "Sarajevo", address: "Dobrinja 1" },
];

const products = [
  {
    id: "1",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "2",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "3",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "4",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "5",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "6",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "7",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "8",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
  {
    id: "9",
    discount: 20,
    productImg: "/img/product.png",
    commerceImg: "/img/product-commerce.png",
    oldPrice: 100.0,
    newPrice: 80.0,
    validFrom: "24.02.2023",
    validTo: "24.03.2023",
  },
];

const name = "Sport Reality";
const img = "/img/product-commerce.png";

const Commerce = ({ role }) => {
  const [shopsValue] = useState(shops);
  const [productsValue] = useState(products);
  const [showAllShops, setShowAllShops] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const { primaryColor, searchColor } = useColor(role);

  return (
    <Container>
      <MainMenu backgroundColor={primaryColor} searchColor={searchColor} role={role}/>
      <CommerceUserSection name={name} img={img} role={role} allowed={"Commerce"}/>
      <div>
        <Title style={{ color: primaryColor }}>Radnje</Title>
        <ShopContainer>
          {role === "Commerce" && <BtnAddShop /> }
          {shopsValue.slice(0, showAllShops ? shopsValue.length : role === "Commerce" ? 3 : 4).map((shop, index) => (
            <ShopCard key={index} city={shop.city} address={shop.address} role={role} />
          ))}
        </ShopContainer>
      </div>
      <div style={{ marginTop: "1rem", marginBottom: "8rem" }}>
        {!showAllShops && (
          <ShowItems onClick={() => setShowAllShops(true)}>Prikaži listu dodanih radnji</ShowItems>
          )}
        {showAllShops && (
          <ShowItems onClick={() => setShowAllShops(false)}>Sakrij listu dodanih radnji</ShowItems>
          )}
      </div>
      <div>
        <Title style={{ color: primaryColor }}>Artikli</Title>
        <ShopContainer>
          {role === "Commerce" && <BtnAddProduct /> }
          {productsValue.slice(0, showAllProducts ? productsValue.length : role === "Commerce" ? 3 : 4).map(product => (
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
              primaryColor={primaryColor}
            />
          ))}
        </ShopContainer>
      </div>
      <div style={{ marginTop: "1rem", marginBottom: "11.8rem" }}>
        {!showAllProducts && (
          <ShowItems onClick={() => setShowAllProducts(true)}>
            Prikaži listu dodanih artikala
          </ShowItems>
        )}
        {showAllProducts && (
          <ShowItems onClick={() => setShowAllProducts(false)}>
            Sakrij listu dodanih artikala
          </ShowItems>
        )}
      </div>
      <Footer />
    </Container>
  );
};

export default Commerce;
