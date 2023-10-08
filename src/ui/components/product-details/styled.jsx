import styled from "@emotion/styled";

const Container = styled.div`
  width: 60rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductNameHolder = styled.p`
  color: #333;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  display: flex;
  justify-content: space-between;
`;

const BtnFavorite = styled.img`
  height: 2.5rem;
  width: 6rem;
  cursor: pointer;
`

const Description = styled.div`
  color: #333333;
  font-size: 1.4rem;
`;

const ImgContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export { Container, ProductNameHolder, BtnFavorite, Description, ImgContainer };
