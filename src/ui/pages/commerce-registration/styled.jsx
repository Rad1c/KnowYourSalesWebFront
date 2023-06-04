import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  width: 500px;
  padding-bottom: 25px;
  border: 1px solid #c4c8d1;
  background-color: #fafafa;
  //   box-shadow: -2px 0px 13px -2px rgba(0, 0, 0, 0.75);
  //   -webkit-box-shadow: -2px 0px 13px -2px rgba(0, 0, 0, 0.75);
  //   -moz-box-shadow: -2px 0px 13px -2px rgba(0, 0, 0, 0.75);
`;

const RowContainer = styled.div`
  max-width: 550px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
`;

const BtnRegisterStyle = css`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-image: url("/img/btn-wavy.png");
  background-color: #54357f;
  color: #fafafa;
  :hover {
    color: #54357f;
    background-color: #fafafa;
  }
`;

const Header = styled.div`
  background-image: url("/img/login-wavy.png");
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  color: #54357f;
`;

const ControlsContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
`;

export { Container, RowContainer, BtnRegisterStyle, Header, ControlsContainer, Wrapper };
