/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  CardContainer,
  Discount,
  ArticleImage,
  Description,
  CommerceImageContainer,
  CommerceImage,
  ProductName,
  OldPrice,
  NewPrice,
  ProductLocationAndTime,
  FavoriteContainer,
  Favorite,
} from "./styled";
import { useNavigate } from "react-router";

const ProductCard = ({
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
}) => {
  const [showFavorite, setShowFavorite] = useState(false);
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <CardContainer
      onMouseOver={() => setShowFavorite(true)}
      onMouseOut={() => setShowFavorite(false)}
      onClick={() => navigate(`/product/${id}`)}
    >
      <Discount style={{ backgroundColor: primaryColor }}>{discount}%</Discount>
      <ArticleImage src={productImg} alt="product" />
      <Description>
        <CommerceImageContainer>
          <CommerceImage src={commerceImg} alt="Commerce logo" />
        </CommerceImageContainer>
        <ProductName>{name}</ProductName>
        <div>
          <OldPrice>{oldPrice} KM</OldPrice>
          <NewPrice style={{ color: primaryColor }}>{newPrice}KM</NewPrice>
        </div>
        <ProductLocationAndTime>
          {validFrom} - {validTo}
        </ProductLocationAndTime>
      </Description>
      {role === "User" && showFavorite && (
        <FavoriteContainer>
          {!liked ? (
            <Favorite src="/img/Favorite.svg" alt="Favorite icon" onClick={() => setLiked(true)} />
          ) : (
            <Favorite
              src="/img/Favorite-clicked.svg"
              alt="Clicked favorite icon"
              onClick={() => setLiked(false)}
            />
          )}
        </FavoriteContainer>
      )}
    </CardContainer>
  );
};
export default ProductCard;
