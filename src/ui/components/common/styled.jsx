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
  font-size: 40px;
  font-weight: bold;
  line-height: 1.2;
`;

const MaskDiv = styled.div`
  background-color: #fafafa;
`;

export { Wrapper, Section, MediumTitleHeight, BigTitleHeight, MaskDiv };
