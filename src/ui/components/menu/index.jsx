/** @jsxImportSource @emotion/react */
import { Button } from "@mui/material";
import { MenuContainer, ContentContainer, A, BtnSign } from "./styled";
import logo from "/img/icon.svg";
import { useState } from "react";
import Login from "../login";
import OutsideClickHandler from "react-outside-click-handler";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <MenuContainer>
      <ContentContainer>
        <div>
          <img
            src={logo}
            alt="KnowYourSales logo"
            style={{ height: "4.5rem", margin: "2.5rem" }}
          />
        </div>
        <div style={{ position: "absolute", top: "2rem", right: "2.5rem" }}>
          <A href="#usage-section">Kako koristiti aplikaciju</A>
          <A href="#impressions-section">Utisci</A>
          <A href="#registration-section">Registracija</A>
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            css={BtnSign}
            onClick={() => setOpen(true)}
          >
            Prijavite se
          </Button>
        </div>
        {open && (
          <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
            <Login />
          </OutsideClickHandler>
        )}
      </ContentContainer>
    </MenuContainer>
  );
};

export default Menu;
