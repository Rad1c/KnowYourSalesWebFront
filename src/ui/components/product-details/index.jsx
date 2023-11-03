/* eslint-disable react/prop-types */
import { useState } from "react";
import ProductImages from "../product-images";
import ProductPrice from "../product-price";
import { Container, ProductNameHolder, BtnFavorite, Description, ImgContainer } from "./styled";

const ProductDetails = ({
  primaryColor,
  role,
  description,
  img,
  discount,
  productName,
  oldPrice,
  newPrice,
  images,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <Container>
      <div>
        <ProductNameHolder
          style={{ justifyContent: `${role === "User" ? "space-between" : "flex-start"}` }}
        >
          {productName}
          {role !== "Commerce" &&
            role !== "none" &&
            (role === "User" && !liked ? (
              <BtnFavorite
                src="/img/Favorite.svg"
                alt="Favorite button"
                onClick={() => setLiked(true)}
              />
            ) : (
              <BtnFavorite
                src="/img/Favorite-clicked.svg"
                alt="Favorite button"
                onClick={() => setLiked(false)}
              />
            ))}
        </ProductNameHolder>
        <ProductPrice
          oldPrice={oldPrice}
          newPrice={newPrice}
          discount={discount}
          primaryColor={primaryColor}
        />
      </div>
      <ImgContainer>
        <img
          src={img}
          alt="commerce-img"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      </ImgContainer>
      <Description>{description}</Description>
      {images && <ProductImages productsImages={images} />}
    </Container>
  );
};

export default ProductDetails;
