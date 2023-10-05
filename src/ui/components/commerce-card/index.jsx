/* eslint-disable react/prop-types */
import { Container, NameHolder, Image } from "./styled";

const CommerceCard = (props) => {
  const { name, img } = props;
  return (
    <Container>
      <Image src={img} alt="commerce-img" />
      <NameHolder>{name}</NameHolder>
    </Container>
  );
};

export default CommerceCard;
