/* eslint-disable react/prop-types */
import {
  OldPriceHolder,
  Container,
  NewPriceHolder,
  PriceContainer,
  DicountContainer,
  DicountTitle,
  Discount,
} from "./styled";

const ProductPrice = ({ oldPrice, newPrice, discount, primaryColor }) => {

  return (
    <Container>
      <PriceContainer>
        <OldPriceHolder>{oldPrice} KM</OldPriceHolder>
        <NewPriceHolder style={{ color: primaryColor }}>{newPrice} KM</NewPriceHolder>
      </PriceContainer>
      <DicountContainer style={{ backgroundColor: primaryColor }}>
        <DicountTitle>popust od</DicountTitle>
        <Discount>{discount} %</Discount>
      </DicountContainer>
    </Container>
  );
};

export default ProductPrice;
