import { useState } from "react";
import CommerceUserSection from "../../components/commerce-user-section";
import Footer from "../../components/footer";
import MainMenu from "../../components/main-menu";
import ShopCard from "../../components/shop-card";
import {
  Container,
  ShopContainer,
  BtnAddShop,
  ShopWrapper,
  Title,
  ShopwItems,
  BtnAddProduct,
} from "./styled";
import ProductCard from "../../components/product-card";

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

const name = "Sport Reality";
const img = "/img/product-commerce.png";

const Commerce = () => {
  const [shopsValue, setShops] = useState(shops);
  const [productsValue, setProducts] = useState(products);
  const [showAllShops, setShowAllShops] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);

  return (
    <Container>
      <MainMenu />
      <CommerceUserSection name={name} img={img} />
      <div>
        <Title>Radnje</Title>
        <ShopWrapper>
          <ShopContainer>
            {shopsValue.slice(0, showAllShops ? shopsValue.length : 4).map((shop, index) => (
              <ShopCard key={index} city={shop.city} address={shop.address} />
            ))}
          </ShopContainer>
          <BtnAddShop />
        </ShopWrapper>
      </div>
      {!showAllShops && (
        <ShopwItems onClick={() => setShowAllShops(true)}>Prikaži listu dodanih radnji</ShopwItems>
      )}
      {showAllShops && (
        <ShopwItems onClick={() => setShowAllShops(false)}>Sakrij listu dodanih radnji</ShopwItems>
      )}
      <div>
        <Title>Artikli</Title>
        <ShopWrapper>
          <ShopContainer>
            {productsValue.slice(0, showAllProducts ? shopsValue.length : 4).map((product, _) => (
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
          </ShopContainer>
          <BtnAddProduct />
        </ShopWrapper>
      </div>
      {!showAllProducts && (
        <ShopwItems onClick={() => setShowAllProducts(true)}>
          Prikaži listu dodanih artikala
        </ShopwItems>
      )}
      {showAllProducts && (
        <ShopwItems onClick={() => setShowAllProducts(false)}>
          Sakrij listu dodanih artikala
        </ShopwItems>
      )}
      <Footer />
    </Container>
  );
};

export default Commerce;
