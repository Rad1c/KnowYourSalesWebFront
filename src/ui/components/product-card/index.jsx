/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
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
} from "./styled";

const ProductCard = (props) => {
  const {
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

  return (
    <div css={cardStyles}>
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
    </div>
  );
};
export default ProductCard;
