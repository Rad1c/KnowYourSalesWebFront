import styled from "@emotion/styled";
import { css } from "@emotion/react";

const MainSectionContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #543480 url("/img/wavy.png");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  --mask: conic-gradient(
      from -45deg at bottom,
      #0000,
      #000 1deg 90deg,
      #0000 91deg
    )
    50% / 60px 100%;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: clamp(2rem, 1.5rem + 1vw, 60px);
  height: 40rem;
  line-height: 1.2;
  text-align: center;
  color: #fafafa;
`;

const SelectContainer = styled.div`
  display: flex;
  height: 10rem;
  margin: 5rem 0;
  align-items: center;
  border-color: #fafafa;
  justify-content: space-around;
`;

const SelectStyle = css`
  width: 20rem;
  color: #fafafa;
`;

const BtnSearch = css`
  width: 30rem;
  text-transform: capitalize;
  color: #593b83;
  height: 5rem;
  background-color: #fafafa;
  font-size: 2.6rem;

  :hover {
    color: #593b83;
    background-color: #fafafa;
    box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
  }
`;

export {
  MainSectionContainer,
  TextContainer,
  SelectContainer,
  SelectStyle,
  BtnSearch,
};
