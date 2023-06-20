import styled from "@emotion/styled";

const ImpressionsContainer = styled.div`
  width: 110rem;
  background-color: #fafafa;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  margin: auto;
  margin-bottom: 16.6rem;
`;

const ContentWrapper = styled.div``;

const ImpressionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3.5rem;
`;

export { ImpressionsContainer, ContentWrapper, ImpressionsGrid };
