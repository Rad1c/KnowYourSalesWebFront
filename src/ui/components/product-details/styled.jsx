import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  max-width: 430pxx;
`;

const ProductNameHolder = styled.p`
  color: #333333;
  text-transform: uppercase;
  font-size: 20px;
`;

const Description = styled.div`
  color: #333333;
  max-width: 430px;
`;

const ImgContainer = styled.div`
  width: 100px;
  height: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, ProductNameHolder, Description, ImgContainer };
