import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  color: #7F3551;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 5rem;
`;

const ItemsContainer = styled.div`
  width: 110rem;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
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

export { Container, Title, Wrapper, ItemsContainer, ShowItems };
