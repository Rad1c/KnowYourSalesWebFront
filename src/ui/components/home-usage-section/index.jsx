/** @jsxImportSource @emotion/react */
import {
  UsageSectionContainer,
  NumberRgiht,
  NumberLeft,
  ItemsColumnWrapper,
  P,
  SpanText,
  DivItem,
  ContentWrapper,
  Container,
  VerticalSeparatorContainer,
  ImgSponzorsStyle,
} from "./styled";
import { MediumTitleHeight } from "../common/styled";
import sponzors from "/img/sponsors.png";

const UsageSection = () => {
  return (
    <UsageSectionContainer id="usage-section">
      <img src={sponzors} css={ImgSponzorsStyle} />
      <Container>
        <p css={MediumTitleHeight}>KAKO KORISTITI APLIKACIJU</p>
        <ContentWrapper>
          <ItemsColumnWrapper>
            <P>Kao korisnik</P>
            <DivItem>
              <NumberLeft>01</NumberLeft>
              <SpanText>Unesite vaše podatke i registrujte vaš nalog</SpanText>
            </DivItem>
            <DivItem>
              <SpanText>
                Prijavite se na vaš nalog i odaberite željeni grad i kategoriju za pretragu
              </SpanText>
              <NumberRgiht>02</NumberRgiht>
            </DivItem>
            <DivItem>
              <NumberLeft>03</NumberLeft>
              <SpanText>Odaberite određenu trgovinu i dobijajte obavještenja o popustima</SpanText>
            </DivItem>
          </ItemsColumnWrapper>
          <VerticalSeparatorContainer>
            <img src="./img/vertical_separator.svg" />
          </VerticalSeparatorContainer>
          <ItemsColumnWrapper>
            <P>Kao trgovina</P>
            <DivItem>
              <NumberLeft>01</NumberLeft>
              <SpanText>Unesite vaše podatke trgovine i registrujte vaš nalog</SpanText>
            </DivItem>
            <DivItem>
              <SpanText>Unesite lokacije vaših trgovina u određenim gradovima</SpanText>
              <NumberRgiht>02</NumberRgiht>
            </DivItem>
            <DivItem>
              <NumberLeft>03</NumberLeft>
              <SpanText>Počnite objavljivat informacije o popustima i njihovom trajanju</SpanText>
            </DivItem>
          </ItemsColumnWrapper>
        </ContentWrapper>
      </Container>
    </UsageSectionContainer>
  );
};

export default UsageSection;
