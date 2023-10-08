/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  CommerceImageContainer,
  ProductLocationAndTime,
  ProductName,
  cardStyles,
  imageStyles,
  OldPrice,
  NewPrice,
  Description,
  Discount,
  FavoriteContainer,
  Favorite,
} from "./styled";

const ProductCard = (props) => {
  const {
    role,
    id,
    discount,
    productImg,
    commerceImg,
    name,
    oldPrice,
    newPrice,
    validFrom,
    validTo,
    primaryColor,
  } = props;

  const [showFavorite, setShowFavorite] = useState(false);
  const [liked, setLiked] = useState(false)

  return (
    <div css={cardStyles} onMouseOver={() => setShowFavorite(true)} onMouseOut={() => setShowFavorite(false)}>
      <Discount style={{ backgroundColor: primaryColor }}>{discount}%</Discount>
      <img src={productImg} alt="product" css={imageStyles} />
      <Description>
        <CommerceImageContainer>
          <img src={commerceImg} alt="product-commerce" />
        </CommerceImageContainer>
        <ProductName>{name}</ProductName>
        <OldPrice>{oldPrice} KM</OldPrice>
        <NewPrice style={{ color: primaryColor }}>{newPrice}KM</NewPrice>
        <ProductLocationAndTime>
          {validFrom} - {validTo}
        </ProductLocationAndTime>
      </Description>
      {role === "User" && showFavorite && 
        <FavoriteContainer>
          {!liked ? <Favorite src="/img/Favorite.svg" alt="Favorite icon" onClick={() => setLiked(true)}/>
          : <Favorite src="/img/Favorite-clicked.svg" alt="Clicked favorite icon" onClick={() => setLiked(false)}/>}
        </FavoriteContainer> }
    </div>
  );
};
export default ProductCard;
