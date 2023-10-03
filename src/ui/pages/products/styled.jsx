import styled from "@emotion/styled";

const CardContainer = styled.div`
  max-width: 140rem;
  padding: 5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { CardContainer, ContentWrapper };
