import {
  Container,
  MapContainer,
  ProductMapContainer,
  ProductCardContainer,
  Title,
} from "./styled";
import MainMenu from "../../components/main-menu";
import ProductDetails from "../../components/product-details";
import ProductCard from "../../components/product-card";
import Footer from "../../components/footer";

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

const Product = () => {
  return (
    <Container>
      <MainMenu />
      <ProductMapContainer>
        <ProductDetails />
        <MapContainer>
          <img src="/img/map.png" width="100%" height="100%" />
        </MapContainer>
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
