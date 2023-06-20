import {
  FooterContainer,
  RightBox,
  LeftBox,
  SocialContainer,
  IconPointer,
  ColumnContainer,
  MainText,
  SecondaryText,
  ContentContainer,
  CopyTextBold,
} from "./styled";

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <LeftBox>
          <div>
            <img src="/img/kys-blue.png" height="100" css={IconPointer} />
            <SocialContainer>
              <img
                src="/img/facebook.png"
                alt="Facebook logo"
                css={IconPointer}
              />
              <img
                src="/img/twitter.png"
                alt="Twitter logo"
                css={IconPointer}
              />
              <img
                src="/img/instagram.png"
                alt="Instagram logo"
                css={IconPointer}
              />
            </SocialContainer>
          </div>
          <div>
            <CopyTextBold>
              <strong>Copyright &copy;</strong> 2023 by KnowYourSales
            </CopyTextBold>
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
    </FooterContainer>
  );
};

export default Footer;
