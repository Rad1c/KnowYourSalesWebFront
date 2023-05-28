import styled from "@emotion/styled";

const FooterContainer = styled.div`
  width: 1440px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url("/img/18px_wavy.png");
  background-color: #f4f4f5;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const LeftBox = styled.div`
  width: 40%;
  display: flex;
  padding-right: 200px;
  flex-direction: column;
`;
const RightBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
`;

const SocialContainer = styled.div`
  width: 200px;
  display: flex;
  margin-left: 25px;
  margin-top: 20px;
  justify-content: space-between;
`;

const MainText = styled.p`
  color: #555555;
  font-size: 20px;
  letter-spacing: -1px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const SecondaryText = styled.p`
  color: #777777;
  font-size: 20px;
  letter-spacing: -1px;
  margin-bottom: 30px;
`;

const ColumnContainer = styled.div``;

const ContentContainer = styled.div`
  display: flex;
  width: 1300px;
  align-items: center;
`;

const CopyTextBold = styled.p`
  color: #555555;
  font-size: 16px;
  font-weight: bold;
  display: inline;
`;

const CopyTextInit = styled.p`
  color: #777777;
  font-size: 16px;
  font-weight: bold;
  display: inline;
`;

export {
  FooterContainer,
  LeftBox,
  RightBox,
  SocialContainer,
  ColumnContainer,
  MainText,
  SecondaryText,
  ContentContainer,
  CopyTextInit,
  CopyTextBold,
};
