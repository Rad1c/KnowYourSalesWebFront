import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  top: 8rem;
  right: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 2.5rem;
  background-color: #fafafa;
  border: 1px solid #777;
  border-radius: 5px;
`;

const BtnLoginStyle = css`
  height: 4.6rem;
  font-size: 1.6rem;
  text-align: center;
  background-image: url("/img/btn-wavy.png");
  background-color: #54357f;
  color: #fafafa;
  :hover {
    color: #54357f;
    background-color: #fafafa;
  }
`;

const PassForgotten = css`
  font-size: 1.2rem;
  color: #54357f;
  text-align: center;
  cursor: pointer;
`;

export { Container, Form, BtnLoginStyle, PassForgotten };
