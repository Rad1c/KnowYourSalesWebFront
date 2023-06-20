import styled from "@emotion/styled";
import { css } from "@emotion/react";

const FooterContainer = styled.div`
  width: 100%;
  background-image: url("/img/18px-wavy.png");
  background-color: #f5f5f5;
`;

const ContentContainer = styled.div`
  margin: 9.6rem 13rem;
  height: 30rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RightBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 2.4rem;
`;

const SocialContainer = styled.div`
  height: 3.6rem;
  display: flex;
  gap: 3.6rem;
  margin-left: 2rem;
`;

const IconPointer = css`
  cursor: pointer;
`;

const MainText = styled.p`
  color: #555555;
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 5.2rem;
`;

const SecondaryText = styled.p`
  color: #777777;
  font-size: 2.4rem;
  margin-bottom: 3rem;
  cursor: pointer;
`;

const ColumnContainer = styled.div``;

const CopyTextBold = styled.p`
  color: #555555;
  font-size: 2rem;
`;

export {
  FooterContainer,
  LeftBox,
  RightBox,
  SocialContainer,
  IconPointer,
  ColumnContainer,
  MainText,
  SecondaryText,
  ContentContainer,
  CopyTextBold,
};
