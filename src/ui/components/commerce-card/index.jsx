import { Container, NameHolder, ImageContainer, Image } from "./styled";

const CommerceCard = (props) => {
  const { name, img } = props;
  return (
    <Container>
      <ImageContainer>
        <Image src={img} alt="commerce-img" />
      </ImageContainer>
      <NameHolder>{name}</NameHolder>
    </Container>
  );
};

export default CommerceCard;
