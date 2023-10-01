import styled from "@emotion/styled";
import { css } from "@emotion/react";

const AppBarStyle = css`
  background-image: url("img/header-wavy.png");
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

const InputBaseStyle = ({ searchColor }) => css`
  background-color: ${searchColor || "rgba(59, 37, 89, 0.6)"};
  padding-left: 1rem;
  margin-right: 20rem;
  border-radius: 5px;
  font-size: 2rem;
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

const BtnSign = css`
  color: #593b83;
  width: 15rem;
  height: 5rem;
  background-color: #fafafa;
  font-size: 1.6rem;

  :hover {
    color: #593b83;
    background-color: #fafafa;
    box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
  }
`;

const AccountMenu = styled.div`
  background-color: #fafafa;
  color: #1e1e1e;
  font-size: 1.6rem;
  border: 1px solid #777;
  border-radius: 5px;
  padding: 1rem 3rem;
  position: absolute;
  top: 8rem;
  right: 3rem;
  outline: 0;
`;

export {
  AppBarStyle,
  Container,
  InputBaseStyle,
  MenuItemStyle,
  BtnSign,
  AccountMenu,
};
