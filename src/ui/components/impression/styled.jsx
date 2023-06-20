import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
`;

const P = styled.p`
  color: #999;
  font-size: 2.4rem;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 2rem;
`;

export { TextContent, ContentWrapper, P };
