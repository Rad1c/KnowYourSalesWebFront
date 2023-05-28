import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Diamond = styled.div`
  background: #644688;
  height: 60px;
  text-align: center;
  transform: rotate(45deg);
  width: 60px;
`;

const DiamondText = css`
  color: #fafafa;
  display: table-cell;
  height: 60px;
  transform: rotate(-45deg);
  vertical-align: middle;
  font-size: 24px;
  width: 60px;
`;

const DiamondContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-around;
  margin-top: 25px;
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

export { Diamond, DiamondText, TextContent, DiamondContainer, ContentWrapper, P };
