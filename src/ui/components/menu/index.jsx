/** @jsxImportSource @emotion/react */
import { Button } from "@mui/material";
import { MenuContainer, ContentContainer, A, BtnSign } from "./styled";
import logo from "/img/icon.svg";
import { css } from "@emotion/react";

const Menu = () => {
  const x = css`
    color: #20b2aa;
    background-color: red;
    width: 150px;
    :hover {
      color: #fff;
    }
  `;
  return (
    <MenuContainer>
      <ContentContainer>
        <img src={logo} alt="logo" style={{ marginRight: "200px" }} />
        <A href="#usage-section">Kako koristiti aplikaciju</A>
        <A href="#impressions-section">Utisci</A>
        <A href="#registration-section">Registracija</A>
        <Button variant="outlined" color="inherit" size="small" css={BtnSign}>
          Prijava
        </Button>
      </ContentContainer>
    </MenuContainer>
  );
};

export default Menu;
