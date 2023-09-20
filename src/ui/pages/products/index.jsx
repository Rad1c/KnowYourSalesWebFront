import { Pagination } from "@mui/material";
import Footer from "../../components/footer";
import MainMenu from "../../components/main-menu";
import ProductCard from "../../components/product-card";
import { CardContainer, ContentWrapper } from "./styled";
import SortProducts from "../../components/sort-products";
import { useState } from "react";

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
];

const Products = () => {
  const [productsValue, setProducts] = useState(products);

  return (
    <ContentWrapper>
      <MainMenu />
      <SortProducts />
      <hr style={{ width: "120rem", marginTop: "-2rem" }} />
      <CardContainer>
        {productsValue &&
          productsValue.map((product, _) => (
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
      </CardContainer>
      <Pagination
        count={10}
        shape="rounded"
        size="large"
        sx={{
          marginBottom: "8rem",
          "& .Mui-selected": {
            backgroundColor: "#55347f",
            color: "#fafafa",
          },
          "& .Mui-selected:hover": {
            backgroundColor: "#3B2559",
          },
        }}
      />
      <Footer />
    </ContentWrapper>
  );
};

export default Products;
