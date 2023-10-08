/* eslint-disable react/prop-types */
import { useState } from "react";
import ProductImages from "../product-images";
import ProductPrice from "../product-price";
import { Container, ProductNameHolder, BtnFavorite, Description, ImgContainer } from "./styled";

const ProductDetails = ({ primaryColor, role }) => {
  const [liked, setLiked] = useState(false)
  const productName = "nike renew ride 3";
  const description =
    "Nova kolekcija je stigla i sa sobom donosi funkcionalne krojeve, najbolje materijale i zanimljive kolorite! Pogledaj vrhunsku ponudu patika, trenerki, dukseva, majica i još mnogo toga.";
  const oldPrice = "210.00";
  const newPrice = "178.50";
  const discount = "15";
  const img = "/img/product-commerce.png";

  return (
    <Container>
      <div>
        <ProductNameHolder style={{justifyContent: `${role === "User" ? "space-between" : "flex-start"}`}}>
          {productName}
          {role !== "Commerce" && role !== "none" && (role === "User" && !liked ? 
            <BtnFavorite src="/img/Favorite.svg" alt="Favorite button" onClick={() => setLiked(true)}/>
          : <BtnFavorite src="/img/Favorite-clicked.svg" alt="Favorite button" onClick={() => setLiked(false)}/>)}
        </ProductNameHolder>
        <ProductPrice oldPrice={oldPrice} newPrice={newPrice} discount={discount} primaryColor={primaryColor} />
      </div>
      <ImgContainer>
        <img
          src={img}
          alt="commerce-img"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      </ImgContainer>
      <Description>{description}</Description>
      <ProductImages />
    </Container>
  );
};

export default ProductDetails;
