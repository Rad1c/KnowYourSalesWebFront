/* eslint-disable react/prop-types */
import { CityHolder, ImageHolder, AddressHolder, Container } from "./styled";

const ShopCard = ({ city, address, role }) => {
  return (
    <Container>
      {role === "Commerce" ? 
        <ImageHolder src="/img/shop-img-c.svg" alt="shop-img"/>
      : role === "User" ? 
        <ImageHolder src="/img/shop-img-u.svg" alt="shop-img"/>
      : <ImageHolder src="/img/shop-img-n.svg" alt="shop-img"/>
      }
      <div>
        <CityHolder>{city}</CityHolder>
        <AddressHolder>{address}</AddressHolder>
      </div>
    </Container>
  );
};

export default ShopCard;
