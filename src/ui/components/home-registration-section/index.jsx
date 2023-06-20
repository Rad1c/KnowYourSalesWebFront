/** @jsxImportSource @emotion/react */
import { Button } from "@mui/material";
import { MediumTitleHeight } from "../common/styled";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <RegistrationSectionContainer id="registration-section">
      <div css={MediumTitleHeight} style={{ textAlign: "center" }}>
        Registracija
      </div>
      <ContentContainer>
        <BoxLeftContainer>
          <P>Registrujte nalog</P>
          <Text>
            Registrujte vaš nalog i počnite dobijati obavještenja o popustima u
            vašim omiljenim radnjama
          </Text>
          <Button
            css={BtnRegisterUser}
            onClick={() => navigate("/user-registration")}
          >
            Započnite registraciju
          </Button>
        </BoxLeftContainer>
        <BoxRightContainer>
          <P>Registrujte nalog</P>
          <Text>
            Registrujte vaš nalog i počnite dobijati obavještenja o popustima u
            vašim omiljenim radnjama
          </Text>
          <Button
            css={BtnRegisterCommerce}
            onClick={() => navigate("/commerce-registration")}
          >
            Započnite registraciju
          </Button>
        </BoxRightContainer>
      </ContentContainer>
    </RegistrationSectionContainer>
  );
};

export default RegistrationSection;
