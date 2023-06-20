import styled from "@emotion/styled";
import { css } from "@emotion/react";

const UsageSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16.6rem;
`;

const NumberLeft = styled.div`
  color: #d8c2ca;
  font-size: 7.8rem;
  line-height: 1.2;
`;

const NumberRight = styled.div`
  color: #c2d9cc;
  font-size: 7.8rem;
  line-height: 1.2;
`;

const ItemsColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 4.8rem;
`;

const P = styled.p`
  color: #333;
  margin-bottom: 3rem;
  font-size: 4.8rem;
  font-weight: bold;
  line-height: 1.2;
`;

const SpanText = styled.span`
  font-size: 2.2rem;
  font-weight: 500;
  color: #333;
  text-align: center;
  line-height: 1.2;
`;

const DivItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 110rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImgSponsorsStyle = css`
  margin-top: 5rem;
  margin-bottom: 10rem;
  max-width: 130rem;
`;

const VerticalSeparatorContainer = styled.div`
  margin: 0 2rem;
`;

export {
  UsageSectionContainer,
  NumberLeft,
  NumberRight,
  ItemsColumnWrapper,
  P,
  SpanText,
  DivItem,
  ContentWrapper,
  Container,
  VerticalSeparatorContainer,
  ImgSponsorsStyle,
};
