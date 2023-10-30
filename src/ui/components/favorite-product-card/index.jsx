/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Container, 
  ImageContainer,
  ContentContainer,
  Name,
  Date,
  PriceContainer,
} from "./styled"

const FavoriteProductCard = (props) => {
  const {
    id,
    name,
    productImg,
    newPrice,
    validTo,
  } = props;

  return (
    <Container>
      <ImageContainer src={productImg} alt="Article image" />
      <ContentContainer>
        <Name>{name}</Name>
        <Date>{validTo}</Date>
      </ContentContainer>
      <PriceContainer>{newPrice} KM</PriceContainer>
    </Container>
  )
}

export default FavoriteProductCard;