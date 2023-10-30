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

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 3rem;
  height: 3rem;
  background-color: #eeebf2;
  rotate: -45deg;
  cursor: pointer;

  :hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
`;

const BtnEdit = styled.img`
  height: 2rem;
  width: 2rem;
  rotate: 45deg;
`

const BtnFavorite = styled.img`
  cursor: pointer;
`

const ControlsContainer = styled.div`
  margin-left: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ModalContainer = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  BtnContainer,
  BtnEdit,
  BtnFavorite,
  ControlsContainer,
  ModalContainer,
  delimiterStyle,
};
