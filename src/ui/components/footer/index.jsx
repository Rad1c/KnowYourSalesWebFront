import {
  FooterContainer,
  RightBox,
  LeftBox,
  SocialContainer,
  ColumnContainer,
  MainText,
  SecondaryText,
  ContentContainer,
  CopyTextBold,
  CopyTextInit,
} from "./styled";

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <LeftBox>
          <div style={{ padding: "100px" }}>
            <img src="/img/kys-blue.png" width="350" height="100" />
            <SocialContainer>
              <img src="/img/instagram.png" />
              <img src="/img/facebook.png" />
              <img src="/img/twitter.png" />
            </SocialContainer>
          </div>
        </LeftBox>
        <RightBox>
          <ColumnContainer>
            <MainText>Nalog</MainText>
            <SecondaryText>Kreirajte nalog</SecondaryText>
            <SecondaryText>Prijavite se</SecondaryText>
          </ColumnContainer>
          <ColumnContainer>
            <MainText>Kompanija</MainText>
            <SecondaryText>O nama</SecondaryText>
            <SecondaryText>Zajednica</SecondaryText>
            <SecondaryText>Saradnici</SecondaryText>
          </ColumnContainer>
          <ColumnContainer>
            <MainText>Politika</MainText>
            <SecondaryText>Privatnost</SecondaryText>
            <SecondaryText>Sigurnost</SecondaryText>
          </ColumnContainer>
        </RightBox>
      </ContentContainer>
      <div style={{ marginBottom: "20px" }}>
        <CopyTextBold>Copyright&copy;</CopyTextBold>
        <CopyTextInit> 2023 by KnowYourSales</CopyTextInit>
      </div>
    </FooterContainer>
  );
};

export default Footer;
