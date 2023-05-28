import styled from "@emotion/styled";
import { css } from "@emotion/react";

const RegistrationSectionContainer = styled.div`
  height: 100vh;
  width: 1440px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  align-items: center;
  justify-content: center;
`;

const BoxLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #7e3550;
  background-image: url("/img/wavy.png");
  width: 50%;
  align-items: center;
  justify-content: space-around;
  --mask: conic-gradient(from 135deg at top, #0000, #000 1deg 89deg, #0000 90deg) top/60.00px 51%
      repeat-x,
    conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) bottom/60.00px 51%
      repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

const BoxRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #357f54;
  background-image: url("/img/wavy.png");
  width: 50%;
  align-items: center;
  justify-content: space-around;
  --mask: conic-gradient(from 135deg at top, #0000, #000 1deg 89deg, #0000 90deg) top/60.00px 51%
      repeat-x,
    conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) bottom/60.00px 51%
      repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

const P = styled.p`
  font-size: 40px;
  color: #fafafa;
  line-height: 1.2;
`;

const Text = styled.div`
  color: #fafafa;
  font-size: 24px;
  text-align: center;
  margin-left: 100px;
  margin-right: 100px;
  font-weifht: bold;
`;

const BtnRegisterUser = css`
  color: #7e3550;
  width: 300px;
  height: 50px;
  background-color: #fafafa;
  font-size: 16px;

  :hover {
    color: #fafafa;
    background-color: #7e3550;
  }
`;

const BtnRegisterCommerce = css`
  color: #357f54;
  width: 300px;
  height: 50px;
  background-color: #fafafa;
  font-size: 16px;

  :hover {
    color: #fafafa;
    background-color: #357f54;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  height: 600px;
`;

export {
  RegistrationSectionContainer,
  BoxLeftContainer,
  BoxRightContainer,
  P,
  Text,
  BtnRegisterUser,
  BtnRegisterCommerce,
  ContentContainer,
};
