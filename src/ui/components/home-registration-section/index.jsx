/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { Button, Modal } from "@mui/material";
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
  ModalContainer,
} from "./styled";
import { useState } from "react";
import CommerceRegistration from "../modals/commerce-registration1";
import UserRegistration from "../modals/user-registration";

const RegistrationSection = () => {
  const [openComm, setOpenComm] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  return (
    <RegistrationSectionContainer id="registration-section">
      <div css={MediumTitleHeight} style={{ textAlign: "center" }}>
        Registracija
      </div>
      <ContentContainer>
        <BoxLeftContainer>
          <P>Registrujte nalog</P>
          <Text>
            Registrujte vaš nalog i počnite dobijati obavještenja o popustima u vašim omiljenim
            radnjama
          </Text>
          <Button
            css={BtnRegisterUser}
            onClick={() => setOpenUser(true)}
            // onClick={() => navigate("/user-registration")}
          >
            Započnite registraciju
          </Button>
          <Modal open={openUser} onClose={() => setOpenUser(false)} disableAutoFocus 
            style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <ModalContainer>
              <UserRegistration setIsModalOpen={isModalOpen => setOpenUser(isModalOpen)} />
            </ModalContainer>
          </Modal>
        </BoxLeftContainer>
        <BoxRightContainer>
          <P>Registrujte nalog</P>
          <Text>
            Registrujte vaš nalog i počnite dobijati obavještenja o popustima u vašim omiljenim
            radnjama
          </Text>
          <Button css={BtnRegisterCommerce} onClick={() => setOpenComm(true)}>
            Započnite registraciju
          </Button>
          <Modal open={openComm} onClose={() => setOpenComm(false)} disableAutoFocus 
            style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <ModalContainer>
              <CommerceRegistration setIsModalOpen={isModalOpen => setOpenUser(isModalOpen)} />
            </ModalContainer>
          </Modal>
        </BoxRightContainer>
      </ContentContainer>
    </RegistrationSectionContainer>
  );
};

export default RegistrationSection;
