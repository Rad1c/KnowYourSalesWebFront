import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 25px;
  width: 450px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductMapContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCardContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 25px;
  max-width: 1100px;
  justify-content: center;
`;

const Title = styled.p`
  margin-top: 30px;
  text-transform: uppercase;
  color: #54357f;
`;

export { Container, MapContainer, ProductMapContainer, ProductCardContainer, Title };
