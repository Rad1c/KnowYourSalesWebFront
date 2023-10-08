import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductMapContainer = styled.div`
  margin-top: 6rem;
  width: 110rem;
  height: 70rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  justify-items: center;
`;

const MapContainerWrapper = styled.div`
  width: 45rem;
  padding: 3rem 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductCardContainer = styled.div`
  margin: 2.5rem 0;
  width: 110rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.p`
  margin-top: 6rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export { Container, MapContainerWrapper, ProductMapContainer, ProductCardContainer, Title };
