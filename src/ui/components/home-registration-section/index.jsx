/** @jsxImportSource @emotion/react */
import { Button } from "@mui/material";
import { MediumTitleHeight } from "../common/styled";
import {
  RegistrationSectionContainer,
  BoxLeftContainer,
  BoxRightContainer,
  P,
  Text,
  BtnRegisterUser,
  ContentContainer,
  BtnRegisterCommerce,
} from "./styled";

const RegistrationSection = () => {
  return (
    <RegistrationSectionContainer id="registration-section">
      <div css={MediumTitleHeight}>registracija</div>
      <ContentContainer>
        <BoxLeftContainer>
          <P>Registrujte nalog</P>
          <Text>
            Registrujte vaš nalog i počnite dobijati obavještenja o popustima u vašim omiljenim
            radnjama
          </Text>
          <Button css={BtnRegisterUser}>Započnite registraciju</Button>
        </BoxLeftContainer>
        <BoxRightContainer>
          <P>Registrujte nalog</P>
          <Text>
            Registrujte vaš nalog i počnite dobijati obavještenja o popustima u vašim omiljenim
            radnjama
          </Text>
          <Button css={BtnRegisterCommerce}>Započnite registraciju</Button>
        </BoxRightContainer>
      </ContentContainer>
    </RegistrationSectionContainer>
  );
};

export default RegistrationSection;
