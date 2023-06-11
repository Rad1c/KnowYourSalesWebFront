import styled from "@emotion/styled";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 50px;
  justify-content: center;
  max-width: 1400px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
`;

export { CardContainer, ContentWrapper };
