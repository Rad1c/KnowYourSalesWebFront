import styled from "@emotion/styled";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const ShopContainer = styled.div`
  width: 110rem;
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 2rem;
`;

const BtnAddShop = styled.div`
  align-self: center;
  justify-self: center;

  width: 10rem;
  height: 10rem;
  background: url("/img/add-shop.png") no-repeat center;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

const BtnAddProduct = styled.div`
  align-self: center;
  justify-self: center;

  width: 10rem;
  height: 10rem;
  background: url("/img/add-product.png") no-repeat center;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

const ShowItems = styled.a`
  margin-top: 1rem;
  color: #777;
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;

export { Container, ShopContainer, BtnAddShop, Title, ShowItems, BtnAddProduct };
