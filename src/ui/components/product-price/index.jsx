import {
  OldPriceHolder,
  Container,
  NewPriceHolder,
  PriceContainer,
  DicountContainer,
  DicountTitle,
  Discount,
} from "./styled";

const ProductPrice = (props) => {
  const { oldPrice, newPrice, discount } = props;

  return (
    <Container>
      <PriceContainer>
        <OldPriceHolder>{oldPrice}</OldPriceHolder>
        <NewPriceHolder>{newPrice}</NewPriceHolder>
      </PriceContainer>
      <DicountContainer>
        <DicountTitle>popust od</DicountTitle>
        <Discount>{discount} %</Discount>
      </DicountContainer>
    </Container>
  );
};

export default ProductPrice;
