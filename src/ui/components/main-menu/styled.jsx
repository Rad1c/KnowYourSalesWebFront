import styled from "@emotion/styled";
import { css } from "@emotion/react";

const AppBarStyle = css`
  background-image: url("img/header-wavy.png");
  // background-color: #55347f;
  height: 10rem;
  color: #fafafa;
`;

const Container = styled.div`
  width: 100%;
  background-image: url("img/header-wavy.png");
  background-color: #55347f;
  --mask: conic-gradient(
      from -45deg at bottom,
      #0000,
      #000 1deg 90deg,
      #0000 91deg
    )
    50% / 30px 100%;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

const InputBaseStyle = css`
  background-color: rgba(59, 39, 87, 0.5);
  padding: 2x;
  padding-left: 10px;
  border-radius: 5px;
  width: 30%;
  color: #fafafa;
`;

const MenuItemStyle = styled.div`
  display: flex;
  gap: 5px;
  padding-left: 20px;
  padding-right: 20px;
  flex-wrap: wrap;
`;

const BtnSignStyle = css`
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

export { AppBarStyle, Container, InputBaseStyle, MenuItemStyle, BtnSignStyle };
