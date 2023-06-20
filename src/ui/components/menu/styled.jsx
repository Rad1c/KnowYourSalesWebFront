import styled from "@emotion/styled";
import { css } from "@emotion/react";

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const A = styled.a`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 500;
  margin-right: 6rem;
  color: #fafafa;
`;

const BtnSign = css`
  color: #593b83;
  width: 15rem;
  height: 5rem;
  margin-right: 2.5rem;
  background-color: #fafafa;
  font-size: 1.6rem;

  :hover {
    color: #593b83;
    background-color: #fafafa;
    box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
  }
`;

export { MenuContainer, ContentContainer, BtnSign, A };
