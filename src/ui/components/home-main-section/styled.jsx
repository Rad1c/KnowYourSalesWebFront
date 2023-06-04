import styled from "@emotion/styled";
import { css } from "@emotion/react";

const MainSectionContainer = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/img/wavy.png");
  background-color: #543480;
  --mask: conic-gradient(from -45deg at bottom, #0000, #000 1deg 90deg, #0000 91deg) 50% / 60px 100%;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: clamp(2rem, 1.5rem + 1vw, 60px);
  height: 400px;
  line-height: 1.2;
  text-align: center;
  color: #fafafa;
`;

const SelectContainer = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  border-color: #fafafa;
  justify-content: space-around;
`;

const SelectStyle = css`
  width: 200px;
  color: #fafafa;
`;

const BtnSearch = css`
  width: 300px;
  text-transform: capitalize;
  color: #593b83;
  height: 50px;
  background-color: #fafafa;
  font-size: 16px;

  :hover {
    color: #fafafa;
    background-color: #593b83;
  }
`;

export { MainSectionContainer, TextContainer, SelectContainer, SelectStyle, BtnSearch };
