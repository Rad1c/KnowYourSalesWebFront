import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 35px;
  background-color: #fafafa;
  border: 1px solid #c4c8d1;
`;

const BtnLoginStyle = css`
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

const Title = styled.p`
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: bold;
  color: #54357f;
`;
export { Container, Form, BtnLoginStyle, Title };
