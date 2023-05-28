import styled from "@emotion/styled";
import { css } from "@emotion/react";

const UsageSectionContainer = styled.div`
  height: 100vh;
  width: 1440px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  align-items: center;
`;

const NumberLeft = styled.div`
  color: #d8c2ca;
  font-size: 50px;
  margin-right: 20px;
  line-height: 1.2;
  display: inline;
`;

const NumberRgiht = styled.div`
  color: #d8c2ca;
  font-size: 50px;
  margin-left: 20px;
  line-height: 1.2;
  display: inline;
`;

const ItemsColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-aling: center;
`;

const P = styled.p`
  color: #3b3b3b;
  font-size: 40px;
  font-weight: bold;
  line-height: 1.2;
`;

const SpanText = styled.span`
  font-size: 30px;
  color: #3b3b3b;
  text-align: center;
  line-height: 1.2;
`;

const DivItem = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1200px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  margin-top: 100px;
`;

const ImgSponzorsStyle = css`
  margin-top: 50px;
  max-width: 1300px;
`;

const VerticalSeparatorContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 90px;
`;

export {
  UsageSectionContainer,
  NumberLeft,
  NumberRgiht,
  ItemsColumnWrapper,
  P,
  SpanText,
  DivItem,
  ContentWrapper,
  Container,
  VerticalSeparatorContainer,
  ImgSponzorsStyle,
};
