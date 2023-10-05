import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 7.4rem;
  margin-bottom: 2.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const P = styled.p`
  color: #1e1e1e;
  font-size: 5rem;
  font-weight: bold;
`;

const ImgContainer = styled.div`
  height: 8rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnEditUser = styled.div`
  margin-top: 2rem;
  width: 5rem;
  height: 5rem;
  background: url("/img/Edit-User.svg") no-repeat center;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

const BtnEditCommerce = styled.div`
  margin-top: 2rem;
  width: 5rem;
  height: 5rem;
  background: url("/img/Edit-Commerce.svg") no-repeat center;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

const BtnDeactivate = styled.div`
  width: 5rem;
  height: 5rem;
  background: url("/img/deactivate.png") no-repeat center;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

const BtnFavorite = styled.img`
  margin-top: 2rem;
  cursor: pointer;
`

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;
`;

const delimiterStyle = css`
  max-width: 65rem;
  max-height: auto;
  margin-bottom: 5.6rem;
  object-fit: contain;
`;

export {
  P,
  Container,
  ImgContainer,
  BtnEditUser,
  BtnEditCommerce,
  BtnDeactivate,
  BtnFavorite,
  ControlsContainer,
  delimiterStyle,
};
