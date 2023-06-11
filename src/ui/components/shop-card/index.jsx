import { CityHolder, AddressHolder, Container } from "./styled";

const ShopCard = (props) => {
  const { city, address } = props;

  return (
    <Container>
      <img src="/img/shop-img.png" alt="shop-img" height="86px" width="70px" />
      <div>
        <CityHolder>{city}</CityHolder>
        <AddressHolder>{address}</AddressHolder>
      </div>
    </Container>
  );
};

export default ShopCard;
