import {
  CommerceImageContainer,
  ProductLocationAndTime,
  ProductName,
  cardStyles,
  descriptionStyles,
  imageStyles,
  OldPrice,
  NewPrice,
} from "./styled";

const ProductCard = () => {
  return (
    <div css={cardStyles}>
      <img src="/img/product.png" alt="Proizvod" css={imageStyles} />
      <CommerceImageContainer>
        <img src="/img/product-commerce.png" alt="product-commerce" />
      </CommerceImageContainer>
      <ProductName>nike renew ride 3</ProductName>
      <OldPrice>100.00</OldPrice>
      <NewPrice>80.00</NewPrice>
      <ProductLocationAndTime>Trg djece Sarajeva 1 (BBI centar)</ProductLocationAndTime>
      <ProductLocationAndTime>24.02. - 24.03.2023</ProductLocationAndTime>
    </div>
  );
};
export default ProductCard;
