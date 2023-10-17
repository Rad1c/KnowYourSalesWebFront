import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
`;

const Container = styled.div`
  width: 70rem;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  border: 1px solid #777;
  border-radius: 5px;
  overflow: hidden;
  `;
  
  const Header = styled.div`
  background-color: #f5f5f5;
  background-image: url("/img/login-wavy.png");
  color: #357F54;
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
  
const RowContainer = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnSaveStyle = css`
  background-image: url("/img/btn-wavy.png");
  background-color: #357F54;
  margin-top: 2.5rem;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  color: #fafafa;
  :hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }
`;

export {
  Wrapper,
  Container,
  Header,
  ControlsContainer,
  RowContainer,
  BtnSaveStyle,
};