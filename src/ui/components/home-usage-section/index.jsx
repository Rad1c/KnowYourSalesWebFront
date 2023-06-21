/** @jsxImportSource @emotion/react */
import {
  UsageSectionContainer,
  NumberRight,
  NumberLeft,
  ItemsColumnWrapper,
  P,
  SpanText,
  DivItem,
  ContentWrapper,
  Container,
  VerticalSeparatorContainer,
  SponsorsContainer,
  SponsorLogos,
} from "./styled";
import { MediumTitleHeight } from "../common/styled";

const UsageSection = () => {
  return (
    <UsageSectionContainer id="usage-section">
      <SponsorsContainer>
        <p
          css={MediumTitleHeight}
          style={{ textAlign: "center", color: "#555" }}
        >
          U SARADNJI SA
        </p>
        <SponsorLogos>
          <img
            src="../../../../public/img/Sport_Vision.png"
            alt="Sport Vision logo"
          />
          <img src="../../../../public/img/Shooter.png" alt="Shooter logo" />
          <img src="../../../../public/img/Tropic.png" alt="Tropic logo" />
          <img src="../../../../public/img/Bingo.png" alt="Bingo logo" />
          <img src="../../../../public/img/Mona.png" alt="Mona logo" />
        </SponsorLogos>
      </SponsorsContainer>
      {/* <img src={sponzors} css={ImgSponsorsStyle} /> */}
      <Container>
        <p css={MediumTitleHeight}>KAKO KORISTITI APLIKACIJU</p>
        <ContentWrapper>
          <P>Kao korisnik</P>
          <P>Kao trgovina</P>
        </ContentWrapper>
        <ContentWrapper>
          <ItemsColumnWrapper>
            <DivItem>
              <NumberLeft>01</NumberLeft>
              <SpanText>Unesite vaše podatke i registrujte vaš nalog</SpanText>
            </DivItem>
            <DivItem>
              <SpanText>
                Prijavite se na vaš nalog i odaberite željeni grad i kategoriju
                za pretragu
              </SpanText>
              <NumberLeft>02</NumberLeft>
            </DivItem>
            <DivItem>
              <NumberLeft>03</NumberLeft>
              <SpanText>
                Odaberite određenu trgovinu i dobijajte obavještenja o popustima
              </SpanText>
            </DivItem>
          </ItemsColumnWrapper>
          <VerticalSeparatorContainer>
            <img src="./img/vertical_separator.svg" />
          </VerticalSeparatorContainer>
          <ItemsColumnWrapper>
            <DivItem>
              <SpanText>
                Unesite vaše podatke trgovine i registrujte vaš nalog
              </SpanText>
              <NumberRight>01</NumberRight>
            </DivItem>
            <DivItem>
              <NumberRight>02</NumberRight>
              <SpanText>
                Unesite lokacije vaših trgovina u određenim gradovima
              </SpanText>
            </DivItem>
            <DivItem>
              <SpanText>
                Počnite objavljivat informacije o popustima i njihovom trajanju
              </SpanText>
              <NumberRight>03</NumberRight>
            </DivItem>
          </ItemsColumnWrapper>
        </ContentWrapper>
      </Container>
    </UsageSectionContainer>
  );
};

export default UsageSection;
