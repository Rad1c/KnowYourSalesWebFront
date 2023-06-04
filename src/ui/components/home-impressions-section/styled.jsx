import styled from "@emotion/styled";

const ImpressionsContainer = styled.div`
  height: 100vh;
  width: 1440px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin-top: 25px;
`;

const P = styled.p`
  color: #3b3b3b;
  font-size: 40px;
  font-weight: bold;
  line-height: 1.2;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 700px;
`;

export { ImpressionsContainer, ContentWrapper, P, ColumnContainer, ContentContainer };
