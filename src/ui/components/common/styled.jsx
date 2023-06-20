import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  height: 100vh;
  width: 1440px;
  // background: linear-gradient(135deg, #2c1c3e 25%, transparent 25%) -10px 0,
  //   linear-gradient(225deg, #2c1c3e 20%, transparent 25%) -10px 0,
  //   linear-gradient(315deg, #2c1c3e 25%, transparent 25%),
  //   linear-gradient(45deg, #2c1c3e 25%, transparent 25%);
  // background-size: 20px 20px;
  background-color: #543480;
`;

const MediumTitleHeight = css`
  color: #644688;
  margin-bottom: 20px;
  font-size: 20px;
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
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 3rem;
`;

const Diamond = styled.div`
  background: #644688;
  height: 50px;
  text-align: center;
  transform: rotate(45deg);
  width: 50px;
`;

const DiamondText = css`
  color: #fafafa;
  display: table-cell;
  height: 50px;
  transform: rotate(-45deg);
  vertical-align: middle;
  font-size: 24px;
  width: 60px;
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
