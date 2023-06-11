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
  const { id, discount, productImg, commerceImg, oldPrice, newPrice, validFrom, validTo } = props;

  return (
    <div css={cardStyles}>
      <Discount>{discount}%</Discount>
      <img src={productImg} alt="product" css={imageStyles} />
      <Description>
        <CommerceImageContainer>
          <img src={commerceImg} alt="product-commerce" />
        </CommerceImageContainer>
        <ProductName>nike renew ride 3</ProductName>
        <OldPrice>{oldPrice} KM</OldPrice>
        <NewPrice>{newPrice}KM</NewPrice>
        <ProductLocationAndTime>
          {validFrom} - {validTo}
        </ProductLocationAndTime>
      </Description>
    </div>
  );
};
export default ProductCard;
