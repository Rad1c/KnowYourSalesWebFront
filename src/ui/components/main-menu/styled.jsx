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
  position: sticky;
  top: 0;
  z-index: 10;

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

// izgl da se ne koristi nigdje
const MenuItemStyle = styled.div`
  display: flex;
  gap: 5px;
  padding-left: 20px;
  padding-right: 20px;
  flex-wrap: wrap;
`;

const UserIcon = styled.img `
  margin-top: 2rem;
  height: 2.6rem;
  cursor: pointer;
`;

const CommerceIcon = styled.img`
  margin-top: 1.5rem;
  height: 3.2rem;
  filter: brightness(500%);
  cursor: pointer;
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

const FavoriteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25rem;
  height: 30rem;
  background-color: #fafafa;
  border-radius: 5px;
  border: 1px solid #777;
  position: absolute;
  top: 8rem;
  overflow: scroll;
  outline: none;
`;

const FavoriteContainerContent = styled.div`
  width: inherit;
  position: absolute;
  top: 0;
  left: .5rem;
  
  ::-webkit-scrollbar{
    display: none;
  }
`;

const FavoriteContainerEmpty = styled.div`
  color: #777;
  font-size: 2.4rem;
  text-align: center;
`;

const AccountMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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

const AccountItem = styled.p`
  cursor: pointer;
`;

const ModalContainer = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  AppBarStyle,
  Container,
  InputBaseStyle,
  MenuItemStyle,
  UserIcon,
  CommerceIcon,
  BtnSign,
  FavoriteContainer,
  FavoriteContainerContent,
  FavoriteContainerEmpty,
  AccountMenu,
  AccountItem,
  ModalContainer,
};
