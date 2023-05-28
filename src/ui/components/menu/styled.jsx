import styled from "@emotion/styled";
import { css } from "@emotion/react";

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
`;

const A = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: #fafafa;
`;

const BtnSign = css`
  color: #593b83;
  width: 150px;
  height: 50px;
  background-color: #fafafa;
  font-size: 16px;

  :hover {
    color: #fafafa;
    background-color: #593b83;
  }
`;

export { MenuContainer, ContentContainer, BtnSign, A };
