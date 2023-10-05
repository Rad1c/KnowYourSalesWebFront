import styled from "@emotion/styled";

const CardContainer = styled.div`
  max-width: 140rem;
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;

  @media (max-width: 84em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 59em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 38em) {
    grid-template-columns: 1fr;
  }
`;

const ContentWrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { CardContainer, ContentWrapper };
