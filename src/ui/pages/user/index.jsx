import { useState } from "react";
import CommerceCard from "../../components/commerce-card";
import CommerceUserSection from "../../components/commerce-user-section";
import MainMenu from "../../components/main-menu";
import { Container, ItemsContainer, Title, Wrapper, ShopwItems } from "./styled";
import Footer from "../../components/footer";
import ProductCard from "../../components/product-card";

const name = "Aleksandar Radić";
const img = "/img/user-generic.png";

const favoriteCommerces = [
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
  {
    id: "6fe1248b-c594-44a6-8a74-2e7119aa085c",
    name: "Sport Reality",
    img: "/img/product-commerce.png",
  },
];

const favoriteProducts = [
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

const User = () => {
  const [commercesValue, setCommercesValue] = useState(favoriteCommerces);
  const [showAllCommerces, setShowAllCommerces] = useState(false);
  const [productsValue, setproductsValue] = useState(favoriteProducts);
  const [showAllProducts, setshowAllProducts] = useState(false);

  return (
    <Container>
      <MainMenu />
      <CommerceUserSection name={name} img={img} />
      <div>
        <Title>omiljene trgovine</Title>
        <Wrapper>
          <ItemsContainer>
            {commercesValue
              .slice(0, showAllCommerces ? commercesValue.length : 4)
              .map((commerce) => (
                <CommerceCard name={commerce.name} img={commerce.img} />
              ))}
          </ItemsContainer>
        </Wrapper>
      </div>
      {!showAllCommerces && (
        <ShopwItems onClick={() => setShowAllCommerces(true)}>
          Prikaži listu omiljenih radnji
        </ShopwItems>
      )}
      {showAllCommerces && (
        <ShopwItems onClick={() => setShowAllCommerces(false)}>
          Sakrij listu omiljenih radnji
        </ShopwItems>
      )}
      <div>
        <Title>Omiljeni artikli</Title>
        <Wrapper>
          <ItemsContainer>
            {productsValue.slice(0, showAllProducts ? productsValue.length : 4).map((product) => (
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
          </ItemsContainer>
        </Wrapper>
      </div>
      {!showAllProducts && (
        <ShopwItems onClick={() => setshowAllProducts(true)}>
          Prikaži listu omiljenih radnji
        </ShopwItems>
      )}
      {showAllProducts && (
        <ShopwItems onClick={() => setshowAllProducts(false)}>
          Sakrij listu omiljenih artikala
        </ShopwItems>
      )}
      <Footer />
    </Container>
  );
};

export default User;
