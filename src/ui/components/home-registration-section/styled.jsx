import styled from "@emotion/styled";
import { css } from "@emotion/react";

const RegistrationSectionContainer = styled.div`
  width: 100%;
  background-color: #fafafa;
  margin-bottom: 14rem;
`;

const ContentContainer = styled.div`
  display: flex;
  --mask: conic-gradient(
        from 135deg at top,
        #0000,
        #000 1deg 89deg,
        #0000 90deg
      )
      top/60.00px 51% repeat-x,
    conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg)
      bottom/60.00px 51% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

const BoxLeftContainer = styled.div`
  background-color: #7e3550;
  width: 50%;
  background-image: url("/img/wavy.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const BoxRightContainer = styled.div`
  background-color: #357f54;
  width: 50%;
  background-image: url("/img/wavy.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const P = styled.p`
  font-size: 5.2rem;
  color: #fafafa;
  font-weight: bold;
  margin-top: 9.6rem;
`;

const Text = styled.div`
  font-size: 2.8rem;
  margin: 6.4rem 10rem;
  color: #fafafa;
  text-align: center;
  font-weifht: bold;
`;

const BtnRegisterUser = css`
  color: #7e3550;
  background-color: #fafafa;
  font-size: 3rem;
  margin-bottom: 9.6rem;

  :hover {
    color: #7e3550;
    background-color: #fafafa;
    box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
  }
`;

const BtnRegisterCommerce = css`
  color: #357f54;
  background-color: #fafafa;
  font-size: 3rem;
  margin-bottom: 9.6rem;

  :hover {
    color: #357f54;
    background-color: #fafafa;
    box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.25);
  }
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
