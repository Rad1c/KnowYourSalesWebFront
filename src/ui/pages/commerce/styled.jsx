import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShopContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 25px;
  max-width: 1100px;
  justify-content: center;
`;

const BtnAddShop = styled.div`
  margin-top: 20px;
  background-image: url("/img/add-shop.png");
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`;

const BtnAddProduct = styled.div`
  margin-top: 20px;
  background-image: url("/img/add-product.png");
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`;

const ShopWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: #357f54;
`;

const ShopwItems = styled.a`
  margin-top: 10px;
  color: #333333;
  cursor: pointer;

  &:hover {
    color: #ff0000;
    text-decoration: underline;
  }
`;

export { Container, ShopContainer, BtnAddShop, ShopWrapper, Title, ShopwItems, BtnAddProduct };
