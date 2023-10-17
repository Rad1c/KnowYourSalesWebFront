import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
`;

const Container = styled.div`
  width: 50rem;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  border: 1px solid #777;
  border-radius: 5px;
  overflow: hidden;
`;

const RowContainer = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnRegisterStyle = css`
  background-image: url("/img/btn-wavy.png");
  background-color: #54357f;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  color: #fafafa;
  :hover {
    color: #54357f;
    background-color: #fafafa;
  }
`;

const Header = styled.div`
  background-color: #f5f5f5;
  background-image: url("/img/login-wavy.png");
  color: #54357f;
  text-align: center;
  font-size: 1.6rem;
  padding: 1.5rem 0;
  margin-bottom: 2rem;
`;

const ControlsContainer = styled.div`
  margin: 0 3rem;
  display: flex;
  flex-direction: column;
`;

export {
  Container,
  RowContainer,
  BtnRegisterStyle,
  Header,
  ControlsContainer,
  Wrapper,
};
