import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ContentWrapper = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-around;
  margin-top: 25px;
  margin-bottom: 5px;
`;

const P = styled.p`
  margin-top: 20px;
  color: #bcbdbc;
  font-size: 28px;
  font-weight: bold;
`;

const TextContent = styled.div`
  max-width: 400px;
  font-size: 16px;
`;

export { TextContent, ContentWrapper, P };
