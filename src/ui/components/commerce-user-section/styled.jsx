import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const P = styled.p`
  font-size: 36px;
  color: #1e1e1e;
  font-weight: bold;
`;

const ImgContainer = styled.div`
  width: 100px;
  height: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const imgStyle = css`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const BtnEdit = styled.div`
  margin-top: 20px;
  background-image: url("/img/edit.png");
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`;

const BtnDeactivate = styled.div`
  background-image: url("/img/deactivate.png");
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;
`;

const delimiterStyle = css`
  max-width: 400px;
  max-height: auto;
  object-fit: contain;
`;

export {
  P,
  ImgContainer,
  imgStyle,
  BtnEdit,
  ControlsContainer,
  BtnDeactivate,
  Container,
  delimiterStyle,
};
