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

const BtnContainer = styled.div`
  align-self: center;
  justify-self: center;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 8rem;
  background-color: #eeebf2;
  border: none;
  rotate: -45deg;
  cursor: pointer;

  :hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
`;

const BtnAdd = styled.img`
  height: 6rem;
  width: 6rem;
  rotate: 45deg;
`

const BtnAddProduct = styled.div`
  align-self: center;
  justify-self: center;

  width: 10rem;
  height: 10rem;
  background: url("/img/add-product.png") no-repeat center;
  background-size: cover;
  border: none;
  cursor: pointer;

  :hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
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

const ModalContainer = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, ShopContainer, BtnContainer, BtnAdd, Title, ShowItems, BtnAddProduct, ModalContainer };
