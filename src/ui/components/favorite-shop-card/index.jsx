/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Container, 
  ImageContainer,
  ContentContainer,
} from "./styled"
  
const FavoriteShopCard = (props) => {
  const {
    id,
    name,
    commerceImg,
  } = props;
  
  return (
    <Container>
      <ImageContainer src={commerceImg} alt="Article image" />
      <ContentContainer>{name}</ContentContainer>
    </Container>
  )
}
  
export default FavoriteShopCard;