import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: #357f54;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

const ItemsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 25px;
  max-width: 1100px;
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

export { Container, Title, Wrapper, ItemsContainer, ShopwItems };
