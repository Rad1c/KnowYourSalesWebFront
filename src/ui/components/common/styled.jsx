import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  height: 100vh;
  width: 144rem;
  background-color: #543480;
`;

const MediumTitleHeight = css`
  color: #644688;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const BigTitleHeight = styled.div`
  color: #3b3b3b;
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 3rem;
`;

const MaskDiv = styled.div`
  background-color: #fafafa;
  width: 100%;
`;

const DiamondContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const Diamond = styled.div`
  background: #644688;
  height: 5rem;
  width: 5rem;
  text-align: center;
  transform: rotate(45deg);
`;

const DiamondText = css`
  color: #fafafa;
  display: table-cell;
  width: 5rem;
  height: 5rem;
  vertical-align: middle;
  font-size: 2.4rem;
  transform: rotate(-45deg);
`;

export {
  Wrapper,
  Section,
  MediumTitleHeight,
  BigTitleHeight,
  MaskDiv,
  DiamondContainer,
  Diamond,
  DiamondText,
};
